/* =========================================================
   NEUROSURGERY SIMULATOR
   JAVASCRIPT
========================================================= */


/* ================= PATIENT DATA ================= */

const patient = {

    name: "Patient #402",

    condition: "Left Temporal Lobe Glioma",

    icp: 12.0,

    heartRate: 75,

    map: 85,

    precision: 100,

    status: "PRE-OP PREPARATION"

};


/* ================= UPDATE VITALS ================= */

function updateVitals() {

    document.getElementById("icp").textContent =
        patient.icp.toFixed(1);

    document.getElementById("heartRate").textContent =
        Math.round(patient.heartRate);

    document.getElementById("map").textContent =
        Math.round(patient.map);

    document.getElementById("precision").textContent =
        Math.max(
            0,
            Math.round(patient.precision)
        );

    document.getElementById("status").textContent =
        patient.status;
}


/* ================= START SIMULATOR ================= */

function startSimulator() {

    document
        .getElementById("monitor")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= DELAY ================= */

function delay(milliseconds) {

    return new Promise(
        resolve =>
            setTimeout(
                resolve,
                milliseconds
            )
    );

}


/* ================= ADD SURGERY LINE ================= */

function addSimulationLine(text) {

    const output =
        document.getElementById(
            "operationOutput"
        );

    const line =
        document.createElement("div");

    line.className =
        "simulation-line";

    line.textContent =
        "→ " + text;

    output.appendChild(line);

    output.scrollTop =
        output.scrollHeight;
}


/* ================= SET ACTIVE STEP ================= */

function setActiveStep(step) {

    document
        .querySelectorAll(".procedure")
        .forEach(
            element =>
                element.classList.remove(
                    "active"
                )
        );

    document
        .getElementById(
            "procedure" + step
        )
        .classList.add("active");
}


/* ================= SURGERY SIMULATION ================= */

async function runSimulation() {

    const button =
        document.getElementById(
            "startSurgeryButton"
        );

    const output =
        document.getElementById(
            "operationOutput"
        );

    const title =
        document.getElementById(
            "operationTitle"
        );


    /* Reset */

    output.innerHTML = "";

    button.disabled = true;

    button.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Simulation Running...';


    /* ================= PRE-OP ================= */

    patient.status =
        "PRE-OPERATIVE MONITORING";

    updateVitals();

    title.textContent =
        "Pre-Operative Preparation";

    addSimulationLine(
        "Patient monitoring initiated."
    );

    await delay(500);

    addSimulationLine(
        "Baseline physiological parameters recorded."
    );

    await delay(500);


    /* ================= CRANIOTOMY ================= */

    setActiveStep(1);

    patient.status =
        "SURGICAL ACCESS SIMULATION";

    patient.icp += 1.4;

    updateVitals();

    title.textContent =
        "Craniotomy Simulation";

    addSimulationLine(
        "Step 1: Craniotomy simulation initiated."
    );

    await delay(500);

    addSimulationLine(
        "Simulated surgical field exposure."
    );

    await delay(500);

    addSimulationLine(
        "Neuronavigation system activated."
    );

    await delay(500);


    /* ================= TUMOR ================= */

    setActiveStep(2);

    patient.status =
        "MICROSURGICAL RESECTION SIMULATION";

    patient.precision -= 2;

    updateVitals();

    title.textContent =
        "Tumor Resection Simulation";

    addSimulationLine(
        "Step 2: Lesion localization simulation."
    );

    await delay(500);

    addSimulationLine(
        "Simulated identification of tumor boundaries."
    );

    await delay(500);

    addSimulationLine(
        "Simulated protection of adjacent neural structures."
    );

    await delay(500);

    addSimulationLine(
        "Tumor resection simulation completed."
    );


    /* ================= CLOSURE ================= */

    setActiveStep(3);

    patient.status =
        "CLOSURE SIMULATION";

    patient.icp =
        Math.max(
            8,
            patient.icp - 2.5
        );

    updateVitals();

    title.textContent =
        "Closure Simulation";

    await delay(500);

    addSimulationLine(
        "Step 3: Dural closure simulation."
    );

    await delay(500);

    addSimulationLine(
        "Bone flap replacement simulation."
    );

    await delay(500);

    addSimulationLine(
        "Scalp closure simulation."
    );


    /* ================= COMPLETE ================= */

    await delay(500);

    patient.status =
        "SIMULATION COMPLETED";

    updateVitals();

    title.textContent =
        "Surgery Simulation Completed";

    addSimulationLine(
        "✓ Neurosurgery simulation completed successfully."
    );

    await delay(300);

    addSimulationLine(
        "Patient status: STABLE — SIMULATED OUTCOME."
    );


    button.disabled = false;

    button.innerHTML =
        '<i class="fa-solid fa-rotate-right"></i> Run Again';

}


/* ================= ANATOMY DATABASE ================= */

const anatomyData = {

    cerebrum: {

        title: "Cerebrum",

        icon: "fa-brain",

        description:
            "Responsible for higher cognitive functions including reasoning, memory, sensory processing and voluntary motor control."

    },


    cerebellum: {

        title: "Cerebellum",

        icon: "fa-circle-nodes",

        description:
            "Coordinates voluntary movement, balance, posture and motor timing."

    },


    brainstem: {

        title: "Brainstem",

        icon: "fa-bolt",

        description:
            "Contains important pathways connecting the brain and spinal cord and participates in essential autonomic functions."

    },


    temporal: {

        title: "Temporal Lobe",

        icon: "fa-ear-listen",

        description:
            "Important for auditory processing, memory and aspects of language and emotional processing."

    },


    frontal: {

        title: "Frontal Lobe",

        icon: "fa-lightbulb",

        description:
            "Involved in executive functions, voluntary motor control, planning, reasoning and aspects of speech."

    }

};


/* ================= SHOW ANATOMY ================= */

function showAnatomy(region) {

    const data =
        anatomyData[region];

    if (!data) return;


    document
        .getElementById(
            "anatomyTitle"
        )
        .textContent =
        data.title;


    document
        .getElementById(
            "anatomyDescription"
        )
        .textContent =
        data.description;


    document
        .getElementById(
            "anatomyIcon"
        )
        .className =
        "fa-solid " + data.icon;

}


/* ================= INITIALIZATION ================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateVitals();

        showAnatomy("cerebrum");

    }
);