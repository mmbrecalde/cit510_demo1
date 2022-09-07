<template>
  <v-card
    class="mx-auto my-12 py-4 px-4 justify"
    max-width="600"
    elevation="4"
  >
    <v-card-title>
    <v-avatar>
      <v-img
        src="mel.jpg"
        alt="Mel"
        size="x-large"
        cover
      ></v-img>
    </v-avatar>

    </v-card-title>

    <v-card-title>Melchizedek B. Recalde</v-card-title>

    <v-card-text>
      <div class="my-4 text-subtitle-1">
        4th Year Student • BSIT • T.I.P. Manila
      </div>

      <div class="text-justify">Melchizedek Recalde is a young Filipino student who studies Information Technology at Technological Institute of the Philippines - Manila. His school program and his curiosity to technology brought him to the Microsoft Learn Student Ambassadors Program. He believes that the learning that you got should never stop in yourself. It should be shared from one person to another. In this way, we can make this world a technology-driven one.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Other Information</v-card-title>

    <v-card-text>
      <v-chip-group
        color="teal accent-2 white--text"
        column
      >
        <v-chip
            @click="show1 = !show1"
        >School</v-chip>

        <v-chip
            @click="show2 = !show2"
        >Program</v-chip>

        <v-chip
            @click="show3 = !show3"
        >Skills</v-chip>

        <v-expand-transition>
        <div v-show="show1" class="text-justify">

            <v-card-text>
                On February 8, 1962, a group of educators headed by Engineer Demetrio A. 
                Quirino, Jr. and Dr. Teresita U. Quirino established the TECHNOLOGICAL INSTITUTE 
                OF THE PHILIPPINES (T.I.P.) as a private non-sectarian stock school in Manila.
                T.I.P. laid down its objective based on its founders’ vision: 1) to maintain 
                high standards of instruction; 2) to bring within the reach of the masses the 
                blessings of higher education; and 3) to cooperate with the government in the 
                implementation of its economic and social amelioration programs.
                <br><br>
                <a href="https://tip.edu.ph/">Read more at the 
                Official T.I.P. Website</a>
            </v-card-text>
        </div>
        </v-expand-transition>

        <v-expand-transition>
        <div v-show="show2" class="text-justify">

            <v-card-text>
                The Information Technology program is focused on the utilization of 
                computers and computer software to plan, install, customize, operate, manage, 
                administer and maintain information technology systems.
                The program prepares students to be IT professionals who are well versed 
                in application installation, operation, development, maintenance and 
                administration; as well as familiar with hardware installation, operation, and 
                maintenance.
                Accredited by the Computing Accreditation Commission (CAC) of ABET 
                (www.abet.org)
                Accredited by PCS Philippine Information and Computing Accreditation 
                Board (PICAB)
                Accredited by Seoul Accord
                Recognition:
                From CHED: Center of Excellence (COE) for Information Technology 
                Education (ITE)
                From PACUCOA: Level IV Accredited Status in Information Technology
            </v-card-text>
        </div>
        </v-expand-transition>

        <v-expand-transition>
        <div v-show="show3" class="text-justify">

            <v-card-text>
                Cloud computing is experiencing explosive growth, as cloud developers are 
                needed for all businesses who wish to migrate their environments, storage, and 
                digital assets to the cloud. In fact, according to LogicMonitor, 87% of global IT 
                decision makers agree that the COVID-19 pandemic has accelerated cloud migration 
                for most organizations. In addition, once migrated, businesses will need 
                programmers familiar with the technology necessary to work effectively with 
                cloud-native applications. And, as businesses rely more heavily on data science, 
                machine learning, and artificial intelligence, work in the cloud becomes even 
                more important since algorithms and models consume significant resources. The 
                result of these business transitions and needs is that cloud engineers and 
                developers, as well as cloud-savvy programmers, are in high demand.
            </v-card-text>
        </div>
        </v-expand-transition>

      </v-chip-group>
    </v-card-text>

  </v-card>
</template>

<script>
import {ref} from 'vue'

const selection = ref(1)
</script>

