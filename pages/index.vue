<script setup lang="ts">
import Navbar from "~/layouts/navbar.vue";
import { useTheme, usePageState } from "#imports";
const readState = usePageState();
const isDark = useTheme();

useHead({
   title: "Phanuphun.na",
   meta: [
      { name: "description", content: "Phanuphun.na" }
   ]
})

onMounted(() => {
   if (isDark.value === true) {
      document.body.classList.add('dark')
   } else {
      document.body.classList.remove('dark')
   }
})

useHead({
   bodyAttrs: {
      class: "font-body text-black border-white",
   }
});

const isSideBarOpen = useSideBarOpen();

interface ProjectDetail {
   name: string;
   image: string | "no image";
   detail: string;
   tags: Array<string>;
   github?: string;
   link?: string;
}

interface ExperiantDetail {
   companyName: string;
   role: string;
   date: string;
   location: string;
   description: string;
   tags: Array<string>;
}

const experiants: Array<ExperiantDetail> = [
   {
      companyName: "Deltasoft (Thailand) Co.,Ltd.",
      role: "Internship",
      date: "June 2022 — Oct 2022 ",
      location: "Khon Kaen , Thailand",
      description:
         "I was responsible for developing a web application for real estate trading called Deltaproperty. My role focused on the admin panel and writing RESTful APIs for integration.",
      tags: ["Angular", "Express", "Tailwind CSS", "Typescript"],
   },
];

definePageMeta({
   middleware:['redirect']
})

const { data } = getData();

function getData() {
   return useAsyncData("list", () =>
      queryContent("/blogs")
         .where({ draft: false })
         .sort({ date: -1 })
         .limit(3)
         .find()
   );
}

const projects: Array<ProjectDetail> = [
   {
      name: "Namphong Phuripat Municiple School Website (Thesis)",
      image: "puripat.png",
      detail:
         "It is a school website used for publicizing and updating various news from the school, including photos of activities, announcements about the opening and closing of terms, and schedules for classes and teaching.",
      tags: ["Vue", "Express", "Taiwind CSS", "Vuetify"],
      github: "https://github.com/phanuphun/namphong-phuriphat-school",
      link: "https://puripatschool.ac.th/",
   },
   {
      name: "DeltaProperty",
      image: "deltaproperty.png",
      detail:
         "Mini-game for Testing Typing Skills Using Fake JS to Randomly Generate Words as a Workshop for Learning Vue.js",
      tags: ["Angular", "Express", "Tailwind CSS"],
      github: "https://github.com/phanuphun/deltaProperty-admin",
   },
   {
      name: "Scraping Steam Reviews",
      image: "scrapingSteamReviews.png",
      detail:
         "A website for scraping game reviews from Steam, with the ability to export the data as a .csv file for further use.",
      tags: ["Puppeteer", "Express", "EJS"],
      github: "https://github.com/phanuphun/scraping-steam-review",
   },
   {
      name: "QRcode Active LED",
      image: "iotproject.jpg",
      detail:
         "A mini project for the IoT course that retrieves data from various sensors to display on a webpage, while also allowing control of operations from both sides. The communication will use a RESTful API",
      tags: ["ESP8266", "Express", "Vue"],
      github: "https://github.com/phanuphun/qrcode-active-led",
   },
   {
      name: "Typing Test",
      image: "typingtest.png",
      detail:
         "Mini-game for Testing Typing Skills Using Fake JS to Randomly Generate Words as a Workshop for Learning Vue.js",
      tags: ["Vue", "Bootstrap"],
      github: "https://github.com/phanuphun/vue-workshop-typing-test",
   },
   {
      name: "Event Reminder",
      image: "no image",
      detail:
         "A website for notifying about various activities, which will send notifications via email.",
      tags: ["PHP", "PHPMailer", "Bootstrap"],
      github: "https://github.com/phanuphun/event-reminder",
   },
];
</script>

<template>
   <navbar></navbar>
   <div class="w-full h-[calc(100vh-58px)] flex justify-center items-center ">
      <img src="/storysetSleep.svg" alt="" class="w-1/2 lg:w-5/12">
   </div>
 <!-- <div class="w-full flex justify-center px-6 sm:px-12 md:px-0 bg-gray-100">
      <div class="w-full flex flex-col justify-center items-center py-16">
         <div class="w-full md:w-9/12 lg:w-8/12 xl:w-6/12 h-full flex">
            <div class="w-full flex flex-col">
               <div class="w-full">
                  <h2 class="text-2xl md:text-3xl text-orange-700 font-extrabold">
                     <a href=""> About Me</a>
                  </h2>
                  <div class="font-light text-orange-700 max-w-full mb-6 mt-5 text-lg lg:text-xl">
                     My name is Phanuphan Namwong, 23 years old. I have
                     knowledge and skills in web application development and am
                     eager to learn new tools to enhance my capabilities.
                  </div>
                  <div class="w-full h-auto mt-3">
                     <div
                        class="w-fit px-3 py-2 bg-white hover:bg-gray-200 duration-300 cursor-pointer text-orange-600 text-md rounded-md border-2 border-gray-200 md:text-xl">
                        resume
                     </div>
                  </div>
               </div>

               <div class="w-full mt-10">
                  <h2 class="text-2xl md:text-3xl text-orange-700 font-extrabold">
                     <a href=""> Experiant</a>
                  </h2>
                  <div class="w-full mt-5">
                     <ul>
                        <li class="relative w-full h-full flex mt-2 gap-3">
                           <div
                              class="relative before:absolute before:left-[7px] before:h-full before:w-[2px] before:bg-orange-400 before:z-0">
                              <div class="w-4 h-4 rounded-full bg-orange-400"></div>
                           </div>

                           <div class="w-full flex flex-col">
                              <div class="w-full" v-for="exp in experiants" :key="exp.companyName">
                                 <div class="w-full flex justify-between text-lg md:text-xl">
                                    <div class="text-orange-700 font-bold">
                                       {{ exp.companyName }}
                                       <p class="font-normal -mt-1">
                                          {{ exp.role }}
                                       </p>
                                    </div>
                                    <div class="text-orange-700 font-bold text-right">
                                       {{ exp.date }}
                                       <p class="font-normal -mt-1 text-md xl:text-lg">
                                          {{ exp.location }}
                                       </p>
                                    </div>
                                 </div>
                                 <div class="text-orange-700 font-extralight text-lg md:text-lg mt-2">
                                    {{ exp.description }}
                                 </div>
                                 <div class="w-full mt-2 flex flex-wrap gap-2">
                                    <Tag v-for="t in exp.tags" type="mini">
                                       {{ t }}
                                    </Tag>
                                 </div>
                              </div>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="w-full mt-20">
                  <h2 class="text-2xl md:text-3xl text-orange-700 font-extrabold">
                     <a href=""> Projects</a>
                  </h2>
                  <div class="w-full flex flex-col gap-3 h-full mt-5">
                     <div v-for="pj in projects" class="w-full h-auto rounded-md p-2 flex bg-white">
                        <div
                           class=" w-[220px] min-w-[220px] h-[120px] md:flex justify-center items-center border-2 border-orange-300 hidden"
                           :class="{ striped: pj.image === 'no image' }">
                           <img v-if="pj.image !== 'no image'" :src="'/img/portfolio/projects/' + pj.image" alt=""
                              class="w-full h-full" />
                           <p v-else class="text-orange-600">No image</p>
                        </div>
                        <div class="pl-5 px-3">
                           <p class="text-orange-700 font-bold text-lg md:text-xl">
                              <span>
                                 {{ pj.name }}
                                 <NuxtLink :to="pj.link" target="_blank" v-if="pj.link">
                                    <icon size="25px" name="charm:link-external"
                                       class="inline hover:text-orange-600 hover:scale-[1.1] cursor-pointer mr-2">
                                    </icon>
                                 </NuxtLink>
                                 <NuxtLink :to="pj.github" target="_blank" v-if="pj.github">
                                    <icon size="25px" name="uil:github"
                                       class="inline hover:text-orange-600 hover:scale-[1.1] cursor-pointer mr-2">
                                    </icon>
                                 </NuxtLink>
                              </span>
                           </p>
                           <p class="text-orange-700 font-extralight text-lg md:text-lg mt-2">
                              {{ pj.detail }}
                           </p>
                           <div class="w-full mt-4 flex flex-wrap gap-2">
                              <Tag type="mini" v-for="t in pj.tags">
                                 {{ t }}
                              </Tag>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="w-full mt-20">
                  <h2 class="text-2xl md:text-3xl text-orange-700 font-extrabold">
                     <a href=""> Recent Blog Posts </a>
                  </h2>
                  <div class="w-flex flex-col mt-5">
                     <div v-for="a in data" :key="a._id" class="">
                        <NuxtLink :to="a._path">
                           <div
                              class="flex flex-col gap-3 bg-white hover:bg-orange-100 transition-colors duration-300 rounded-md py-5 px-5 mt-3">
                              <div class="text-orange-700 font-bold">
                                 {{ a.title }} —
                                 <span class="font-extralight">{{
                                    a.description
                                    }}</span>
                                 <div class="text-orange-700 font-light">
                                    {{ useDateConverter(a.date) }}
                                 </div>
                              </div>
                           </div>
                        </NuxtLink>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div> -->
</template>

<style></style>
