<script lang="ts">
  import { uiSettings } from "$lib/components/ui95/uiSettings.svelte";
  let currentWidth;
</script>

<main
  bind:offsetWidth={currentWidth}
  class="flex mx-[1px] items-center justify-center"
>
  <div class="min-h-screen overflow-auto bg-winwhite-500">
    <div
      class="cv {uiSettings.isMobile || currentWidth < 450
        ? 'mx-1'
        : 'mx-15'} mb-20"
    >
      <div class="flex justify-end items-center">
        <div
          class="w-[80%] bg-[#44546a] text-winwhite-500 text-center h-30 flex justify-center items-end"
        >
          <p class="my-5 text-2xl px-4">CV</p>
        </div>
      </div>
      <div class="bg-transparent"></div>

      <div class="flex justify-end items-center">
        <hr class="w-[80%]" />
      </div>
      <div class="second-col"><h2>Contact Information</h2></div>

      <div class="first-col">Name</div>
      <div class="second-col main">Lorenz Braun</div>

      <div class="first-col">LinkedIn</div>
      <div class="second-col main">
        <a href="https://www.linkedin.com/in/lorenz-braun/"
          >https://www.linkedin.com/in/<wbr />lorenz-braun/</a
        >
      </div>

      <div class="first-col">Website</div>
      <div class="second-col main">
        <a href="https://lorenz-lb.github.io/">https://lorenz-lb.github.io/</a>
      </div>

      <div class="col-span-2 items-center text-center">
        For more personal information please consider contacting me on <a
          href="https://www.linkedin.com/in/lorenz-braun/">LinkedIn</a
        >
      </div>

      <div class="flex justify-end items-center">
        <hr class="w-[80%]" />
      </div>
      <div class="second-col"><h2>Professional Experience</h2></div>

      <div class="first-col">
        <span>03/2023</span>
        <span class="align-fix">-</span>
        <span>08/2023</span>
      </div>
      <div class="second-col">
        <p class="main">Internship in DeepLearning & Machine Vision</p>
        <p class="sub">Fraunhofer IOSB Department Human-AI Interaction</p>
      </div>

      <div class="first-col">
        <span>03/2022</span>
        <span class="align-fix">-</span>
        <span>03/2023</span>
      </div>
      <div class="second-col">
        <p class="main">
          Student Assistant <br /> Java Application Development Tutor
        </p>
        <p class="sub">Karlsruhe University of Applied Sciences</p>
      </div>

      <div class="flex justify-end items-center">
        <hr class="w-[80%]" />
      </div>
      <div class="second-col"><h2>Education</h2></div>

      <div class="first-col">
        <span>09/2024</span>
        <span class="align-fix">-</span>
        <span>heute</span>
      </div>
      <div class="second-col">
        <p class="main">Master of Science in Computer Science</p>
        <p class="sub">Karlsruhe University of Applied Sciences</p>
      </div>

      <div class="first-col">
        <span>03/2021</span>
        <span class="align-fix">-</span>
        <span>08/2024</span>
      </div>
      <div class="second-col">
        <p class="main">Bachelor of Science in Computer Science</p>
        <p class="sub">Karlsruhe University of Applied Sciences</p>
      </div>

      <div class="first-col">
        <span>08/2018</span>
        <span class="align-fix">-</span>
        <span>01/2021</span>
      </div>
      <div class="second-col">
        <p class="main">
          IT specialist for <br /> Application Development
        </p>
        <p class="sub">Syntactix GmbH, Friedrichsdorf</p>
      </div>

      <div class="first-col">
        <span>08/2016</span>
        <span class="align-fix">-</span>
        <span>06/2018</span>
      </div>
      <div class="second-col">
        <p class="main">
          University of Applied Sciences Entrance Qualification
        </p>
        <p class="sub">Hochtaunusschule, Oberursel</p>
      </div>

      <div class="flex justify-end items-center">
        <hr class="w-[80%]" />
      </div>
      <div class="second-col"><h2>Skills</h2></div>

      <div class="first-col">Programming and <br />Query Languages</div>
      <div class="second-col main">
        Python, C, C++, C#, Java, JavaScript, TypeScript,<br />SQL
      </div>

      <div class="first-col">Frameworks & Tools</div>
      <div class="main">
        Scrum, Docker, PyTorch, OpenCV, Node.js, Svelte,<br /> Blender, MS Office
      </div>

      <div class="first-col">Languages</div>
      <div class="second-col">
        <p class="main">German - Native</p>
        <p class="main">English - Fluent</p>
      </div>
    </div>
  </div>
</main>

<style>
  @import "$lib/components/ui95/assets/ui95.css";

  .cv {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
  }

  hr {
    border: solid 2px #44546a;
  }

  h2 {
    font-size: x-large;
    color: #44546a;
  }

  .second-col {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-wrap-style: stable;
    align-content: flex-start;
  }

  .first-col {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    text-align: right;
    text-wrap-style: stable;
    text-wrap-mode: wrap;
    overflow-wrap: normal;

    font-size: large;
    gap: 3px;
    justify-content: end;
    padding-top: 3px;
  }

  .align-fix {
    transform: translateY(-0.15em);
  }

  .sub {
    font-size: medium;
  }

  .main {
    font-size: larger;
  }
</style>
