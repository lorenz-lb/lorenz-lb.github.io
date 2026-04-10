<script lang="ts">
  import { onMount } from "svelte";
  import { ECSApp } from "./control/appECS";
  import banner from "./banner.png";

  import example from "./img/example.gif";
  import water_extreme from "./img/extreme_detail_water.png";
  import water_high from "./img/high_detail_water.png";
  import water_low from "./img/low_detail_water.png";
  import workgroupDispatch from "./img/gpu-workgroup-dispatch (Custom).png";
  import workgroup from "./img/gpu-workgroup.png";
  import pipeline from "./img/renderpipeline.png";
  import { uiSettings } from "$lib/components/ui95/uiSettings.svelte";

  let gpuAvailable: boolean = false;

  if (navigator.gpu) {
    gpuAvailable = true;
  }

  let pond_canvas: HTMLCanvasElement;
  let app: ECSApp;

  onMount(async () => {
    app = new ECSApp(pond_canvas);
    app.startApp();
  });
</script>

<main class="flex justify-center w-full">
  <div class="p-8 space-y-10 w-full">
    <!-- TEXT -->
    <div class="space-y-10">
      <!-- Banner -->
      <img src={banner} alt={"banner"} />
      <!-- Head -->
      <h1 class="text-4xl font-bold text-center mb-8">WebGPU</h1>

      <div
        style="text-align: center; display: block; margin-left: auto; margin-right: auto; width: 100%;"
      >
        <p>
          If you are only here for the playable demo, jump right to it by
          clicking this button:
        </p>

        <button
          class="h-20 w-60 element3d button3d"
          onclick={() => {
            document.getElementById("playableDemo")?.scrollIntoView();
          }}
        >
          Jump to Demo!
        </button>
      </div>

      <p>
        In this project I take a look at WebGPU, a modern GPU API for the
        browser. The first chapters introduce you to the world of GPUs and GPU
        computing, which can be quite complex and confusing when first learning
        about this topic. After that, I take a look at the WebGPU architecture,
        the API structure and compare WebGPU briefly to its predecessor, WebGL.
        With a short introduction to WGLS, WebGPU&#39;s custom shading language,
        the code-heavy parts begin. First I show the classic beginner program
        every graphics programmer starts with, Hello Triangle. Then, because
        simple tutorials like <em>Hello Triangle</em> do not convey how a technology
        is actually used or how real problems are solved with a technology, I also
        describe the small* demo I&#39;ve created. In the demo you are a boat, and
        you can swim to the left and right and also throw out your fishing rod.
      </p>
      <blockquote>
        <p>
          * As you will see, small is a relative term. The feature set of the
          demo is small but its codebase is not.
        </p>
      </blockquote>
      <p>
        <img
          style="display: block; margin-left: auto; margin-right: auto; width: {uiSettings.isMobile
            ? '100%'
            : '80%'};"
          class="img-in-text"
          src={example}
          alt="demo"
        />
      </p>
      <blockquote>
        <p>
          Footage of the demo project created in order to take a look at WebGPU
        </p>
      </blockquote>
      <h2 id="content">Content</h2>
      <ul>
        <li><a href="#how-does-a-gpu-work">How does a GPU work</a></li>
        <li>
          <a href="#pipelines">Pipelines</a>
          <ul class="pb-1">
            <li><a href="#graphics-pipeline">Graphics Pipeline</a></li>
            <li><a href="#compute-pipeline">Compute Pipeline</a></li>
            <li><a href="#workgroups">Workgroups</a></li>
          </ul>
        </li>
        <li>
          <a href="#webgpu-architecture">WebGPU Architecture</a>
          <ul class="pb-1">
            <li><a href="#example-rendering">Example Rendering</a></li>
          </ul>
        </li>
        <li>
          <a href="#webgpu-as-successor-to-webgl"
            >WebGPU as successor to WebGL</a
          >
        </li>
        <li><a href="#webgpu-shading-language">WebGPU Shading Language</a></li>
        <li><a href="#hello-triangle">Hello Triangle</a></li>
        <li>
          <a href="#webgpu-for-developing-games">WebGPU for developing games</a>
          <ul class="pb-1">
            <li>
              <a href="#ecs---entity-component-system"
                >ECS - Entity Component System</a
              >
            </li>
            <li>
              <a href="#subdivision-with-compute-shaders"
                >Subdivision with Compute Shaders</a
              >
            </li>
          </ul>
        </li>
        <li><a href="#where-to-use-webgpu">Where to use WebGPU</a></li>
        <li><a href="#final-words">Final words</a></li>
        <li><a href="#playableDemo">Demo</a></li>
      </ul>
      <h2 id="how-does-a-gpu-work">How does a GPU work</h2>
      <blockquote>
        <p>
          <strong>Note:</strong> In this document the terms &#39;GPU&#39; and &#39;Graphics
          card&#39; are used interchangeably, even if the GPU technically only describes
          the chip soldered to the Graphics card, which also contains Memory, a Heat
          sink, fans etc.
        </p>
      </blockquote>
      <p>
        To understand WebGPU, its goals, and its design decisions, we first need
        to understand the difference between a CPU and a GPU. The CPU (or
        Central Processing Unit) is often compared to the brain of a human. The
        CPU can calculate a variety of different things and can handle data in
        many different forms. It can run arbitrary code with incredible speeds.
        Modern CPUs like the AMD Ryzen 9 7900X have clock speeds of more than 5
        GHz on 12 CPU cores. As a stark contrast, a modern top-of-the-line GPU
        (or Graphics Processing Unit) like the Nvidia RTX 5090 has a clock speed
        of around 2 GHz but contains around 21.760 cores to process data. But
        there is a catch. While the CPU cores are very versatile and can work
        independently, the GPU cores can (most of the time) only do special
        calculations and need to run in groups with the same code. But because
        GPUs are originally designed to do graphics programming tasks, this is
        not a drawback. In graphics programming you often need to do simple
        operations very often. Consider coloring in a Full-HD image. For that
        you need to determine the color of each pixel and write it into a
        buffer, which is then displayed. With that, you would already have about
        2 million operations just to write the correct color into the color
        buffer. Doing this sequentially can take a long time (in compute terms).
        Doing this parallel with multiple threads / cores can lead to problems
        because threads need to acquire locks to safely interact with each
        other.
      </p>
      <p>
        To tackle this issue, every GPU uses a simple trick: Just don&#39;t use
        locks but use context and trust the developer to write code that does
        not interfere across threads / cores.
      </p>
      <p>
        All those 2 million operations to calculate a color and write to the
        same buffer are independent from each other, even if they are using the
        same resources. We know that the color buffer has a place for each
        pixel, so we can just trust the program executed on the GPU that it will
        only write its pixel information to its designated location in the
        buffer and execute the calculations of each pixel in parallel.
      </p>
      <p>
        The key takeaways are that the GPU has way more, but much simpler, cores
        than a CPU. The GPU can also do many things in parallel without thinking
        about locks or semaphores because the GPU&#39;s architecture allows its
        different cores to access the same resources in parallel. But how
        exactly are GPU calculations being performed? How can a programmer
        define what a GPU should do and on what data? For that, we have to take
        a look at the architecture of GPU APIs, which communicate with the
        hardware to allow calculations to be run on the GPU.
      </p>
      <h2 id="pipelines">Pipelines</h2>
      <p>
        To do calculations on a CPU, you just &quot;throw&quot; operations and
        data at the CPU, and it does its magic and returns you the result. The
        GPU, on the other hand, first needs to be configured so it knows exactly
        what kind of data comes in and what to do with this data. But once the
        GPU is configured, it can handle massive amounts of data. This
        data-driven compute model is called a pipeline. If you have defined a
        pipeline, you can just push data in on one end and get the expected
        result on the other end at an incredible rate. To illustrate the
        data-driven / throughput-driven architecture of a GPU, consider the
        following:
      </p>
      <p>
        A modern CPU has memory access speeds in the tenths of gigabytes per
        second. Using DDR5-5600 RAM you can, for example, expect transfer rates
        of about 70 GB/s. A modern GPU, on the other hand, has transfer speeds
        measured in terabytes per second. The NVIDIA RTX 5090 can read up to 1.8
        TB/s from its internal GDDR7 VRAM.
      </p>
      <blockquote>
        <p>
          <strong>Note</strong>: This example compares system memory with
          graphics memory and does not consider caches in any way or form. This
          is because caches do not effect the maximum transfer rates of memory.
        </p>
      </blockquote>
      <p>
        There are two types of pipelines within WebGPU which will be looked at.
      </p>
      <h3 id="graphics-pipeline">Graphics Pipeline</h3>
      <p>
        The main task of a GPU is the transformation of a 3D scene into a 2D
        image to be shown on a screen. We will take a look at the traditional
        rasterization pipeline, which is still used in most of the 3D
        applications running in real-time today. We will not look into
        Ray-/Pathtracing. To convert a 3D scene into a 2D image, data needs to
        be transformed in many different ways. For that there is the graphics
        pipeline, which describes exactly what and when which calculations are
        performed on the data. In the case of the graphics pipeline, you enter
        data like 3D models, textures, materials, lighting information, viewport
        size, etc., and the result is a 2D image.
      </p>
      <p>
        The graphics pipeline consists of different stages but can be
        categorized into three different parts. The following image shows the
        different grouped stages of the render pipeline.
      </p>
      <p>
        <img
          class="block w-[100%] object-contain"
          style="display: block; margin-left: auto; margin-right: auto; width: {uiSettings.isMobile
            ? '100%'
            : '80%'};"
          src={pipeline}
          alt="renderpipeline"
        />
      </p>
      <h4 id="application-">Application:</h4>
      <p>
        This stage prepares data to be send to the GPU. In games this step
        includes tasks like collision detection, physics simulation etc.
        It&#39;s executed fully on the CPU, which is why it will not be examined
        here and is marked with dashed lines in the image above.
      </p>
      <h4 id="geometry-">Geometry:</h4>
      <p>
        The geometry step is responsible for calculations regarding polygons and
        vertices. The first sub-step is the <strong>Vertex Shader</strong>, a
        GPU program defined by the developer to do various different tasks. It
        takes vertices as input, often consisting of 3D position, normal data,
        and texture coordinates. The vertex shader transforms the vertex data to
        move objects from model space to world space. It’s essentially the act
        of “placing” a 3D object into a scene with multiple objects relative to
        a world origin. After that, each vertex in the “world” is transformed
        based on the camera. That means that if you are looking around in a
        video game, it’s not you that is rotating and moving, but rather the
        whole universe around you (the camera), and you are perfectly still.
      </p>
      <p>
        The output of the vertex shader are still only vertices. The next
        substage, the <strong>Primitive Assembly</strong>, then creates
        primitives such as triangles and lines.
      </p>
      <p>
        Those are fed into <strong>Geometry / Tesselation</strong> Shaders. These
        special shaders can create new geometry by, for example, subdividing big
        triangles into smaller triangles. Because the Geometry / Tessellation shader
        comes after the vertex shader, creating new vertices in those steps doesn’t
        come with a hefty performance penalty. WebGPU does not support Geometry nor
        Tessellation shaders. That’s why I won’t dive any deeper, even if they are
        very interesting.
      </p>
      <p>
        A very nice example of what tessellation can look like and how powerful
        it can be can be found <a
          href="https://www.youtube.com/watch?v=p_VpAMaxwpY">here</a
        >. While <strong>Geometry</strong> / <strong>Tesselation</strong> steps are
        optional, the last two steps of the Geometry Stage are not.
      </p>
      <p>
        The <strong>Clipping</strong> stage removes all primitives outside the
        camera frustum, so “you don’t get what you don’t see.” And the last
        geometry stage, the <strong>Viewport Transformation</strong>, prepares
        the geometry data for the Rasterization by projecting the vertices onto
        the viewport plane.
      </p>
      <h4 id="rasterization-">Rasterization:</h4>
      <p>
        The rasterization stage uses the data from the Geometry stage to compute
        the color values of each pixel in the final image. The first substage,
        the <strong>Rasterizer</strong>, takes the projected vertex data and
        generates fragments (often equal to pixels). Each fragment is assigned
        different interpolated values, calculated from the three vertices from
        the original corresponding triangle. Those interpolated values represent
        the input to the next substage, the Fragment Shader.
      </p>
      <p>
        The <strong>Fragment Shader</strong> determines the color of the fragments,
        which again are typically 1:1 mappings to pixels. Within the Fragment Shader
        the developer can, for example, read from texture data or calculate lighting
        information to determine what color a pixel should be.
      </p>
      <p>
        That’s it! As you can see, a lot of heavy lifting has to happen to be
        able to render a 3D scene into a 2D image.
      </p>
      <h3 id="compute-pipeline">Compute Pipeline</h3>
      <p>
        Besides rendering images, modern GPUs are often used for AI related
        tasks. The reason is that rendering and AI tasks share fundamentals:
        float matrix calculations. While rendering needs those to, for example,
        transform and translate the position of objects in 3D space or do
        projections to reduce the dimension of data, in AI tasks, matrix
        operations are used for linear transformations used in nearly every
        modern AI model today. For calculations not related to graphics
        programming, a whole different, much simpler pipeline is used, the
        Compute Pipeline.
      </p>
      <p>
        The Compute Pipeline is so simple that it only consists of one part, a
        GPU program called Compute Shader. A Compute Shader takes an arbitrary
        input and returns an arbitrary output. For example, it&#39;s easily
        possible to create a Compute Shader that takes an array of floats and
        returns an array where each float is doubled. More on compute shaders
        later.
      </p>
      <p>
        Those differences between the CPU and GPU and how the different
        pipelines are structured are fundamental to understanding WebGPU. In
        later sections we will take a look at how WebGPU makes use of those
        pipelines and what to expect when trying to develop software using
        WebGPU.
      </p>
      <h3 id="workgroups">Workgroups</h3>
      <p>
        Because of the special GPU architecture, thread execution on the GPU is
        a little different from thread execution on the CPU. While CPU threads
        can be dispatched in any quantity, GPU threads work within so called
        workgroups.
      </p>
      <p>
        A workgroup is a 3D collection of threads that are run together and
        often share memory. The defined workgroup size within a Compute Shader
        is static and can&#39;t be changed on the fly, only when creating a new
        Compute Pipeline. A workgroup defined with size <code>(3, 4, 2)</code> can
        be imagined as a cuboid with sides as long as the dimensions:
      </p>
      <p>
        <img
          style="display: block; margin-left: auto; margin-right: auto; width: {uiSettings.isMobile
            ? '70%'
            : '30%'};"
          src={workgroup}
          alt="workgroup"
        />
      </p>
      <blockquote>
        <p>
          Image from <a
            href="https://webgpufundamentals.org/webgpu/lessons/webgpu-compute-shaders.html"
            >https://webgpufundamentals.org/webgpu/lessons/webgpu-compute-shaders.html</a
          >
        </p>
      </blockquote>
      <p>
        The perfect size for a workgroup depends on the underlying GPU. As an
        abstraction layer, WebGPU cannot infer the perfect workgroup size. But
        modern GPUs are often constructed in a way that 64 threads are running
        in lockstep, which means that 64 threads are running exactly the same
        code at exactly the same time but only on different data. This can
        vaguely be compared with SIMD instructions. As with many things in
        graphics programming, the workgroup size can&#39;t just be set but has
        to be tested and chosen individually for each hardware configuration.
        The size of 64 is a good starting point and should yield the best
        results in most of the cases.
      </p>
      <p>
        But the workgroup size is not the only variable to tweak to be able to
        dispatch a massive amount of parallel running threads. In fact, the
        workgroup size defines the lower bound on how many threads have to at
        least run to fulfill a task. When dispatching a Compute Shader to the
        GPU, you also have to specify an amount of workgroups to dispatch. You
        could, for example, call <code>dispatchWorkgroups(4,3,2)</code> to dispatch
        4*3*2 = 24 workgroups, also defining a cuboid shape, which would result in
        24 * 24 = 576 threads.
      </p>
      <p>
        <img
          style="display: block; margin-left: auto; margin-right: auto; width: {uiSettings.isMobile
            ? '70%'
            : '30%'};"
          src={workgroupDispatch}
          alt="dispatch"
        />
      </p>
      <blockquote>
        <p>
          Image from <a
            href="https://webgpufundamentals.org/webgpu/lessons/webgpu-compute-shaders.html"
            >https://webgpufundamentals.org/webgpu/lessons/webgpu-compute-shaders.html</a
          >
        </p>
      </blockquote>
      <p>
        Perhaps you are asking yourself: <em
          >Why make it so difficult and convoluted to run things in parallel?</em
        >
      </p>
      <p>
        We already concluded that the workgroup size is dependent on the GPU
        architecture. It&#39;s mainly bound to the memory layout and what data
        is processed in memory. If we have, for example, just a 1D array of
        floats to process, a workgroup size of <code>(64, 1, 1)</code> could be
        valid. On the other hand, if we have a 2D image to process, the size of
        <code>(8, 8, 1)</code> would be more fitting and much more performant. This
        is because of the internal GPU memory layout, memory access patterns and
        address calculation. This topic is extremely complex, but what to do can
        be reduced to one sentence:
      </p>
      <p>
        <em
          >Always fit the dimensions of the workgroup to the dimensions of the
          data/algorithm.</em
        >
      </p>
      <p>
        Okay, but why do we need to also define a 3D size when dispatching
        workgroups? Why can&#39;t we just set the workgroup size to, for
        example, <code>(1024, 1024, 1)</code>? This is because the workgroup
        size is limited to 256 threads, again because this number fits the GPU
        hardware pretty well. But there are often tasks that could benefit from
        running on more than 256 threads. For that, multiple workgroups need to
        be dispatched. To still fit the dimensionality of the data/algorithm,
        the dispatching also happens to accept three dimensions.
      </p>
      <p>
        The last thing I want to mention when talking about workgroups is
        overdispatching. Because a workgroup has a fixed size, it&#39;s often
        not possible to only dispatch as many threads as actually needed.
        Dispatching fewer threads is not possible because this means that data
        that needs to be processed is not processed. Thus, the most common case
        is that more threads are dispatched as needed. To ensure that those
        threads do not mess with memory or waste GPU resources, overdispatching
        protection needs to happen.
      </p>
      <p>
        Even if we did not take a look at the WebGPU shading language yet, here
        is some code to point out overdispatching protection. In almost every
        compute shader program you can spot something along these lines:
      </p>
      {@html `
      <pre><code class="lang-wgsl">
      <span class="hljs-meta">@compute</span> <span class="hljs-meta">@workgroup_size(64, 1, 1)</span>
      fn main(
          <span class="hljs-meta">@builtin(global_invocation_id)</span> global_id: vec3&lt;u32 &gt;
      ) {
              let total_points: u32 = uniforms.totalPoints;

          <span class="hljs-comment">// overdispatching protection</span>
          <span class="hljs-keyword">if</span> global_id.x &gt; total_points {
              <span class="hljs-keyword">return</span>;
          }

          <span class="hljs-comment">// do the calculations</span>
          ...

      }
</code></pre>`}

      <p>
        The thread ID describes the position of the thread inside the cuboid of
        all dispatched threads and identifies a thread uniquely. As you can see,
        overdispatching protection is just checking the thread ID to ensure that
        the current thread has work and is not out of the data bounds.
      </p>
      <h2 id="webgpu-architecture">WebGPU Architecture</h2>
      <p>
        The workflow of WebGPU (and almost any other modern graphics API) is as
        follows:
      </p>
      <p>
        First, you are specifying the pipeline to exactly instruct the GPU what
        data to expect in what stage and how exactly to process the data. After
        that, you prepare the data to be uploaded on the GPU by bringing it into
        the correct format, which are often just byte arrays. In the last step,
        you need to tell the GPU to execute a command, like drawing a triangle
        with a specified GPU pipeline. Currently there are two different
        paradigms to handle GPU tasks.
      </p>
      <p>
        The first is to have a global state machine like OpenGL and WebGL do.
        This state machine is very easily configurable because each resource and
        API call is easily available everywhere.
      </p>
      <p>
        On the other hand, there is the explicit definition of state which, for
        example, Vulcan and WebGPU use. Having to define state via objects and
        structs enables the developer to have a more detailed control over what
        is actually happening inside the GPU. But it comes at the cost of having
        to write more code and having to think more about the overall
        architecture the software has to have. WebGPU tries to enable the
        developers to have a firm control over everything happening regarding
        the GPU while also keeping it simple. For that, WebGPU also uses the
        object and structs approach and lets the developer handle state
        explicitly. To accomplish tasks like rendering and computing, WebGPU
        offers many different interfaces in its API. The general starting point
        of each WebGPU application is the <code>GPUDevice</code> which is
        responsible for interacting with the GPU. The <code>GPUDevice</code> is
        an abstraction of all the tasks the GPU can perform. It uses an
        <code>GPUAdapter</code>
        which is an abstraction of the actual hardware, and a
        <code>GPUCanvasContext</code> to render the output to. The following tables
        show the different interfaces, used most commonly when working with WebGPU,
        categorized by their usage.
      </p>
      <table>
        <thead>
          <tr>
            <th style="text-align:left">Ressources</th>
            <th style="text-align:left"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left"><code>GPUBuffer</code></td>
            <td style="text-align:left"
              >A block of memory to store data on the GPU</td
            >
          </tr>
          <tr>
            <td style="text-align:left"><code>GPUSampler</code></td>
            <td style="text-align:left"
              >Description of how a shader has to transform / filter texture
              resources</td
            >
          </tr>
          <tr>
            <td style="text-align:left"><code>GPUTexture</code></td>
            <td style="text-align:left"
              >A special block of memory containing Textures to Sample from</td
            >
          </tr>
          <tr>
            <td style="text-align:left"><code>GPUTextureView</code></td>
            <td style="text-align:left"
              >A handle to a GPUTexture further specifying how to interpret and
              access the data</td
            >
          </tr>
        </tbody>
      </table>
      <blockquote>
        <p>Resources represent physical memory</p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th style="text-align:left">Encoders</th>
            <th style="text-align:left"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left"><code>GPUCommandEncoder</code></td>
            <td style="text-align:left"
              >Collects a sequence of GPU commands to be issued to the GPU</td
            >
          </tr>
          <tr>
            <td style="text-align:left"><code>GPURenderPassEncoder</code></td>
            <td style="text-align:left"
              >Groups commands related to Vertex/Fragment shader stages</td
            >
          </tr>
          <tr>
            <td style="text-align:left"><code>GPUComputePassEncoder</code></td>
            <td style="text-align:left"
              >Groups commands related to the Compute shader stage</td
            >
          </tr>
        </tbody>
      </table>
      <blockquote>
        <p>Encoders collect GPU commands</p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th style="text-align:left">Pipelines</th>
            <th style="text-align:left"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left"><code>GPUComputePipeline</code></td>
            <td style="text-align:left">Controls the Compute shader stage</td>
          </tr>
          <tr>
            <td style="text-align:left"><code>GPUPipelineLayout</code></td>
            <td style="text-align:left"
              >Defines the layout of a Pipeline by for example specifying what
              resources are used</td
            >
          </tr>
          <tr>
            <td style="text-align:left"><code>GPURenderPipeline</code></td>
            <td style="text-align:left"
              >Controls the Vertex/Fragment Shader stages</td
            >
          </tr>
        </tbody>
      </table>
      <blockquote>
        <p>
          Pipelines describe the specific state of Compute and Render Pipelines
        </p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th style="text-align:left">BindGroups</th>
            <th style="text-align:left"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left"><code>GPUBindGroup</code></td>
            <td style="text-align:left"
              >Defines a bundled group of Ressources to be used in a shader</td
            >
          </tr>
          <tr>
            <td style="text-align:left"><code>GPUBindgrouplayout</code></td>
            <td style="text-align:left">Defines the layout of a GPUBindGroup</td
            >
          </tr>
        </tbody>
      </table>
      <blockquote>
        <p>
          BindGroups map between Resource-Slots, defined in Shaders, and actual
          resources like GPUBuffer and Texture
        </p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th style="text-align:left">ShaderModule</th>
            <th style="text-align:left"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left"><code>ShaderModule</code></td>
            <td style="text-align:left"
              >Describes what to do in an shader Vertex/Fragment/Compute Shader
              stage</td
            >
          </tr>
        </tbody>
      </table>
      <br />
      <p>
        Many of those objects are created by calling the corresponding function
        on the <code>GPUDevice</code>. Consider the following code:
      </p>
      {@html `
      <pre><code class="lang-ts">
      <span class="hljs-keyword">const</span> device  = navigator.gpu.requestAdapter()?.requestDevice()!;
      ...
      <span class="hljs-keyword">const</span> layout  = device.createBindGroupLayout(<span class="hljs-meta">{...}</span>);
      <span class="hljs-keyword">const</span> buffer  = device.createBuffer(<span class="hljs-meta">{...}</span>);
      <span class="hljs-keyword">const</span> texture = device.createTexture(<span class="hljs-meta">{...}</span>)
</code></pre>
`}
      <p>
        You can see a clear pattern. To create anything related to the GPU, you
        have to use the correct function on the <code>GPUDevice</code>. Each of
        those functions takes a configuration object as input, which describes
        how exactly your requested object should be configured. In the case of
        the <code>createBuffer</code> function, the configuration could look like
        this:
      </p>

      {@html `
<pre><code class="lang-ts">
      <span class="hljs-keyword">const</span> <span class="hljs-built_in">buffer</span> = device.createBuffer({
          <span class="hljs-built_in">size</span>: <span class="hljs-number">64</span>,
          usage: GPUBufferUsage.UNIFORM,
          label: <span class="hljs-string">'Global Uniform Buffer'</span>
      });
</code></pre>
`}

      <p>
        This creates a GPUBuffer with a size of 64 bytes and a specific usage
        mode. The usage <code>UNIFORM</code> is used to be able to bind this
        buffer in a bind group.<br />Each and every function expects an object
        with many different, partially optional, settings to create the correct
        GPU related object.
      </p>
      <p>This makes the usage of the architecture very simple and uniform.</p>
      <ol>
        <li>
          Create a configuration of how your requested object should look like
        </li>
        <li>
          Request that object by calling the corresponding function from the <code
            >GPUDevice</code
          >
        </li>
        <li>use the created object</li>
      </ol>
      <h3 id="example-rendering">Example Rendering</h3>
      <p>
        Let&#39;s take a look at the concept of how rendering is done on the
        GPU.
      </p>
      <p>
        The most important concept is that in WebGPU you are not dispatching
        commands directly to the GPU but rather collecting a series of commands
        and then dispatching a list of things to do to the GPU.
      </p>
      <p>
        The <code>CommandEncoder</code> encodes commands to be dispatched to the
        GPU. Those commands are grouped into Passes, for example, a RenderPasses
        for opaque objects, a RenderPass for transparent objects, or
        ComputePasses. Each pass is recording corresponding GPU commands like
        setting correct resources and configurations, binding data, and doing
        <code>draw</code>
        calls. The <code>draw</code> call instructs the GPU to actually do the
        calculations to draw the specified amount of triangles to the screen by
        pushing the corresponding data through the pipeline. By calling the
        <code>finish()</code>
        function on the <code>CommandEncoder</code> a buffer containing all
        those instructions for the GPU is created. To actually instruct the GPU
        to do the defined calculations, the <code>CommandBuffer</code> has to be
        written to the <code>GPUCommandQueue</code>. In code this can look
        something like this, often being spread amongst multiple files
        responsible for different RenderPasses.
      </p>

      {@html `
<pre><code class="lang-ts">
      <span class="hljs-keyword">const</span> commandEncoder = device.createCommandEncoder();

      // renderpass <span class="hljs-keyword">with</span> all its configurations <span class="hljs-keyword">and</span> the draw call
      <span class="hljs-keyword">const</span> passEncoder = commandEncoder.beginRenderPass(<span class="hljs-meta">{...}</span>);
      passEncoder.setPipeline(<span class="hljs-meta">{...}</span>);
      passEncoder.setBindGroup(<span class="hljs-meta">{...}</span>);
      passEncoder.setVertexBuffer(<span class="hljs-meta">{...}</span>);
      passEncoder.draw(<span class="hljs-meta">{...}</span>);
      passEncoder.<span class="hljs-keyword">end</span>();

      <span class="hljs-keyword">const</span> commandBuffer = commandEncoder.finish();
      device.queue.submit([commandBuffer]);
</code></pre>
`}

      <h2 id="webgpu-as-successor-to-webgl">WebGPU as successor to WebGL</h2>
      <p>
        Before we take a look at WebGPUs custom Shader language, let&#39;s
        compare WebGPU to its predecessor, WebGL. As previously mentioned, the
        biggest difference is the API&#39;s architecture and the functionality.
        Consider the following code to set up WebGPU and clear the canvas:
      </p>
      {@html `
    <pre><code class="lang-ts">
    <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setupWebGPU</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">if</span> (!navigator.gpu) {
            <span class="hljs-keyword">return</span>;
        }

        <span class="hljs-keyword">const</span> canvas = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">'canvas'</span>);
        <span class="hljs-keyword">const</span> context = canvas.getContext(<span class="hljs-string">'webgpu'</span>);

        <span class="hljs-keyword">const</span> adapter = <span class="hljs-keyword">await</span> navigator.gpu.requestAdapter();
        <span class="hljs-keyword">const</span> device = <span class="hljs-keyword">await</span> adapter.requestDevice();

        <span class="hljs-keyword">const</span> presentationFormat = navigator.gpu.getPreferredCanvasFormat();

        context.configure({
            device,
            <span class="hljs-attr">format</span>: presentationFormat,
        });

        <span class="hljs-comment">// record commands with commandEncoder</span>
        <span class="hljs-keyword">const</span> commandEncoder = device.createCommandEncoder();
        <span class="hljs-keyword">const</span> passEncoder = commandEncoder.beginRenderPass({
            <span class="hljs-attr">colorAttachments</span>: [{
                <span class="hljs-attr">view</span>: context.getCurrentTexture().createView(),
                <span class="hljs-attr">loadOp</span>: <span class="hljs-string">'clear'</span>, 
                <span class="hljs-attr">clearValue</span>: { <span class="hljs-attr">r</span>: <span class="hljs-number">0.1</span>, <span class="hljs-attr">g</span>: <span class="hljs-number">0.2</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">0.8</span>, <span class="hljs-attr">a</span>: <span class="hljs-number">1.0</span> }, 
                <span class="hljs-attr">storeOp</span>: <span class="hljs-string">'store'</span>,
            }],
        });
        passEncoder.end();

        <span class="hljs-comment">// dispatch all recorded commands async to the GPU</span>
        <span class="hljs-keyword">const</span> commandBuffer = commandEncoder.finish();
        device.queue.submit([commandBuffer]);
    }
    </code></pre>
  `}
      <p>
        As seen in a previous code snippet, WebGPU collects all GPU commands
        with the <code>GPUCommandEncoder</code>and dispatches all commands to
        the GPU simultaneously. This is done because WebGPU is designed to be
        async. As previously mentioned, WebGPU does not have a global state
        machine, it instead lets you define structures and objects that describe
        exactly what the GPU has to do. Instead of directly executing tasks,
        WebGPU forces the user to &#39;record&#39; all actions in the correct
        order with all corresponding properties. Those recorded actions are then
        dispatched together to the GPU queue, which works asynchronously. This
        allows the application to record different commands in parallel,
        boosting the CPU performance. But more importantly, it eliminates the
        waiting of the CPU for the GPU to render. After the submission of the
        list of commands to the GPU queue, the CPU can directly start to crunch
        data for the next frame.
      </p>
      <p>
        On the other hand, consider the same task in WebGL, initiating the
        renderer and clearing the canvas.
      </p>
      {@html `
      <pre><code class="lang-ts">
      function setupWebGL() {
          <span class="hljs-keyword">const</span> canvas = document.createElement('canvas');
          <span class="hljs-keyword">const</span> <span class="hljs-keyword">gl</span> = canvas.getContext('webgl2');

          <span class="hljs-keyword">if</span> (!<span class="hljs-keyword">gl</span>) {
              <span class="hljs-keyword">return</span>;
          }

          <span class="hljs-keyword">gl</span>.viewport(0, 0, canvas.width, canvas.height);
          <span class="hljs-keyword">gl</span>.clearColor(0.1, 0.2, 0.8, 1.0); 
          <span class="hljs-keyword">gl</span>.<span class="hljs-keyword">clear</span>(<span class="hljs-keyword">gl</span>.COLOR_BUFFER_BIT);
      }
</code></pre>
`}
      <p>
        As you can see, WebGL is very simple. After the <code>gl</code> context
        is received, you can just call the necessary functions on this context
        and the action is performed immediately on the GPU. The
        <code>gl.clear(...)</code>
        function, for example, clears the canvas with the specified color, previously
        set with <code>gl.clearColor(...)</code>. The main problem with WebGL is
        that when calling a function like <code>clear</code> or
        <code>clearColor</code> the CPU has to read and write the global state and
        then communicate with the GPU driver to execute the command. This can hurt
        performance, especially when there are many commands. If a 3D scene has hundreds
        or even thousands of different draw calls because it has many different textures
        and materials, this can lead to overhead and long idle times for the CPU,
        where compute resources are wasted. WebGL needs to be used synchronously
        because it has a global context consisting of one big state machine, which
        needs to be configured correctly before doing a draw call. If multiple threads
        were to access this state machine in parallel, WebGL could not guarantee
        that when a draw call is dispatched, that all configurations are still correct.
      </p>
      <p>
        This makes WebGPU way more feasible for applications where the CPU usage
        is critical. While WebGPU&#39;s async style is way more efficient, it
        clearly has the disadvantage of having to write more boilerplate code
        and manage state by yourself. This aligns with other modern graphics
        APIs, which influenced WebGPU and where no state machine is used.
        Vulcan, for example, is famous for its 1000 lines of boilerplate code to
        render a single triangle, but it is also famous for being extremely
        performant.
      </p>
      <p>
        The following code is a direct example of the different approaches
        between WebGL and WebGPU. While WebGL uses just functions to configure
        the WebGL state machine and to do tasks, WebGPU configures objects with
        explicit context and works asynchronously with a task queue on the GPU:
      </p>

      {@html `
<pre><code class="lang-ts">
      <span class="hljs-comment">// WebGL</span>
      <span class="hljs-keyword">gl</span>.clearColor(0.1, 0.2, 0.8, 1.0); 
      <span class="hljs-keyword">gl</span>.<span class="hljs-keyword">clear</span>(<span class="hljs-keyword">gl</span>.COLOR_BUFFER_BIT);

      <span class="hljs-comment">// WebGPU</span>
      <span class="hljs-keyword">const</span> passEncoder = commandEncoder.beginRenderPass({
          colorAttachments: [{
              <span class="hljs-keyword">view</span>: context.getCurrentTexture().createView(),
              loadOp: '<span class="hljs-keyword">clear</span>', 
              clearValue: { r: 0.1, <span class="hljs-keyword">g</span>: 0.2, b: 0.8, a: 1.0 }, 
              storeOp: 'store',
          }],
      });
      passEncoder.end();
      device.queue.submit([commandEncoder.finish()]);
</code></pre>
`}
      <blockquote>
        <p>
          <strong>Note:</strong> While WebGL has an explicit
          <code>gl.clear()</code>
          call, WebGPU calls the <code>clear</code> function to he start of every
          frame / renderpass automatically
        </p>
      </blockquote>
      <p>
        Besides the architecture being focused on being async, WebGPU also has
        more/different features than WebGL. The biggest feature is the support
        of general purpose computing on the GPU, also called Compute Shaders.
        More on them later. First, let&#39;s look at the new programming
        language WebGPU introduces to write GPU programs, because it does not
        use the older GLSL (OpenGL Shading Language), which WebGL and OpenGL
        use.
      </p>
      <h2 id="webgpu-shading-language">WebGPU Shading Language</h2>
      <p>
        WebGPU uses WGSL (WebGPU Shading Language, pronounced
        &#39;wig-sull&#39;), which is an abstraction language to be able to be
        compiled to other intermediate languages for Graphics APIs like SPIR-V
        (Standard Portable Intermediate Language), DXIL (DirectX Intermediate
        Language) and MSL (Metal Shading Language). WGSLs syntax is influenced
        by Rust and Metal Shading Language, Apple&#39;s own shading language for
        Apple&#39;s GPU framework called Metal. WGSL is, like other shading
        languages, strictly typed to provide the most information to the
        compiler possible. Those types include <code>bool</code>,
        <code>i32</code>, <code>u32</code> and <code>f32</code> but also two,
        three, and four dimensional vectors <code>vecN&lt;T&gt;</code> and
        matrices <code>matNxM&lt;f32&gt;</code> where <code>N</code> and
        <code>M</code>
        must be from &#123;2, 3, 4&#125;. With <code>let</code> and
        <code>var</code>
        there are immutable and mutable modifiers for variable declaration. Keywords
        to change the control flow include <code>if</code>,
        <code>switch</code>, <code>for</code>, <code>while</code> and
        <code>loop</code>, but also <code>break</code> <code>continue</code> and
        <code>return</code>. WGSL allows for function definition and function
        calling. Like other shading languages, there are many functions already
        implemented. For example, functions like <code>sin</code>,
        <code>max</code>, <code>ceil</code> or <code>normalize</code> which are functions
        essential for writing shaders.
      </p>
      <p>
        A simple WGSL function to be used in a game of life simulation could
        look something like this:
      </p>

      {@html `
<pre><code class="lang-wgsl">
      <span class="hljs-selector-tag">fn</span> <span class="hljs-selector-tag">countNeighbors</span>(<span class="hljs-attribute">x</span>: u32, <span class="hljs-attribute">y</span>: u32) <span class="hljs-selector-tag">-</span>&gt; <span class="hljs-selector-tag">u32</span> {
        <span class="hljs-selector-tag">return</span> <span class="hljs-selector-tag">getCell</span>(x - <span class="hljs-number">1</span>, y - <span class="hljs-number">1</span>) + <span class="hljs-selector-tag">getCell</span>(x, y - <span class="hljs-number">1</span>) + <span class="hljs-selector-tag">getCell</span>(x + <span class="hljs-number">1</span>, y - <span class="hljs-number">1</span>) + 
               <span class="hljs-selector-tag">getCell</span>(x - <span class="hljs-number">1</span>, y) +                         <span class="hljs-selector-tag">getCell</span>(x + <span class="hljs-number">1</span>, y) + 
               <span class="hljs-selector-tag">getCell</span>(x - <span class="hljs-number">1</span>, y + <span class="hljs-number">1</span>) + <span class="hljs-selector-tag">getCell</span>(x, y + <span class="hljs-number">1</span>) + <span class="hljs-selector-tag">getCell</span>(x + <span class="hljs-number">1</span>, y + <span class="hljs-number">1</span>);
      }
</code></pre>
`}
      <blockquote>
        <p>
          <strong>Note</strong>: <code>getCell</code> is also a custom function
          returning the aliveness value of an cell at <code>x</code>,<code
            >y</code
          >
        </p>
      </blockquote>
      <p>
        In the example above, you can easily see the influence of Rust on the
        syntax. Defining functions with the <code>fn</code> keyword and adding
        type information with <code>: T</code> is typical to Rust.
      </p>
      <p>
        To further define context for the compiler, there are also many
        different annotations, marked with an <code>@</code> symbol, like
        <code>@vertex</code>
        for marking a function as the entrypoint for a vertex shader and
        <code>@fragment</code>
        or <code>@compute</code> to mark a function as a entrypoint for a fragmant
        or compute shader.
      </p>
      <p>
        The following table shows annotations with explanations and examples
        that I used in this project.
      </p>
      <table>
        <thead>
          <tr>
            <th style="text-align:left">Annotation</th>
            <th style="text-align:left">Description</th>
            <th style="text-align:left">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left"><code>@group</code></td>
            <td style="text-align:left">defines the bindgroup of a resource</td>
            <td style="text-align:left"
              ><code
                >@group(0) @binding(0) var&lt;storage, read&gt; in_data : f32;</code
              ></td
            >
          </tr>
          <tr>
            <td style="text-align:left"><code>@binding</code></td>
            <td style="text-align:left"
              >defines the position inside a bindgroup</td
            >
            <td style="text-align:left"
              ><code
                >@group(0) @binding(0) var&lt;storage, read&gt; in_data : f32;</code
              ></td
            >
          </tr>
          <tr>
            <td style="text-align:left"><code>@location</code></td>
            <td style="text-align:left"
              >defines the position of in-/output of a shader</td
            >
            <td style="text-align:left"
              ><code>struct Data location(0) position : vec4f}</code></td
            >
          </tr>
          <tr>
            <td style="text-align:left"><code>@builtin</code></td>
            <td style="text-align:left"
              >specifics that a variable comes from a built-in feature of WebGPU</td
            >
            <td style="text-align:left"
              ><code>@vertex fn vs1(@builtin(vertex_index) id: u32)</code></td
            >
          </tr>
          <tr>
            <td style="text-align:left"><code>@vertex</code></td>
            <td style="text-align:left">Entrypoint for Vertex Shaders</td>
            <td style="text-align:left"><code>@vertex fn vs1()</code></td>
          </tr>
          <tr>
            <td style="text-align:left"><code>@fragment</code></td>
            <td style="text-align:left">Entrypoint for Fragment Shaders</td>
            <td style="text-align:left"><code>@fragment fn fs1()</code></td>
          </tr>
          <tr>
            <td style="text-align:left"><code>@compute</code></td>
            <td style="text-align:left">Entrypoint for Compute Shaders</td>
            <td style="text-align:left"
              ><code>@compute @workgroup_size(8,8)</code></td
            >
          </tr>
          <tr>
            <td style="text-align:left"><code>@workgroup_size</code></td>
            <td style="text-align:left"
              >Sets the size how many threads are in a workgroup in a compute
              shader</td
            >
            <td style="text-align:left"
              ><code>@compute @workgroup_size(8,8)</code></td
            >
          </tr>
        </tbody>
      </table>
      <p>
        As you can see, some attributes are often combined with other
        attributes, like <code>@compute</code> defining a compute shader and
        <code>@workgroup_size</code> specifying the number of threads for this compute
        shader.
      </p>
      <p>
        Two other attributes used together are the <code>@group</code> and
        <code>@binding</code>
        attributes. If you, for example, have a shader that expects one bind group
        with two properties, <code>in_data</code> and
        <code>out_data</code> then your shader code has to contain something along
        these lines:
      </p>

      {@html `
<pre><code class="lang-wgsl">
      <span class="hljs-variable">@group</span>(<span class="hljs-number">0</span>) <span class="hljs-variable">@binding</span>(<span class="hljs-number">0</span>) var&lt;storage, read&gt;       <span class="hljs-attribute">in_data  </span>: array&lt;f32&gt;;
      <span class="hljs-variable">@group</span>(<span class="hljs-number">0</span>) <span class="hljs-variable">@binding</span>(<span class="hljs-number">1</span>) var&lt;storage, read_write&gt; <span class="hljs-attribute">out_data </span>: array&lt;f32&gt;;
</code></pre>
`}
      <p>
        In this example there are two variables defined, two arrays containing
        only <code>f32</code> numbers. Both arrays are bound in the same
        bindgroup (<code>@group(0)</code>), and inside the pointed brackets is
        also defined how the data is accessed. While <code>in_data</code> can
        only be read, <code>out_data</code> can also be written to. Generally
        speaking, WGSL is not reinventing the wheel. It’s just a shading
        language, used to define programs that will run on a GPU. The only real
        architectural difference between other shading languages and WGSL is
        that WGSL focuses on safety via strict typing in combination with
        explicit declaration of access patterns (like defining if only read or
        also write access is needed) and a very strict resource binding syntax
        via <code>@group</code> and <code>@binding</code> annotations. Because WGSL
        was designed to be run on the web, and thus it is to be expected that it
        has to run on a very heterogeneous set of compute devices, WGSL tries to
        minimize the interpretation space by being very explicit.
      </p>
      <p>
        To learn more about WGSL visit <a href="https://www.w3.org/TR/WGSL/"
          >the WGSL documentation</a
        > which is about 350 pages of features and definitions of what WGSL offers.
        This document is also great to always have open on the side while programming
        WebGPU shaders.
      </p>
      <h2 id="hello-triangle">Hello Triangle</h2>
      <p>
        This chapter shows the most basic WebGPU application there is, the
        beginner&#39;s project for every graphics programmer, Hello Triangle! In
        this example you can see the setup needed to create a WebGPU application
        and what is needed to render a red triangle on screen.
      </p>
      <p>The following steps are also marked in the code:</p>
      <ol>
        <li>
          Create the <code>GPUDevice</code> by using a Canvas and a
          <code>GPUAdapter</code>
        </li>
        <li>Define the data to be rendered, in our case one triangle</li>
        <li>
          Create a <code>GPURenderPipeline</code> describing what the code is in
          each stage (vertex/fragment) and how vertex data should be read (triangle-list).
          Also define how a shader should read data and where to expect it (shaderLocation:0)
        </li>
        <li>
          Do the actual render loop each frame
          <ol>
            <li>Record all GPU commands with a command encoder</li>
            <li>Set the pipeline and data to process</li>
            <li>Draw the triangle by doing a draw call</li>
          </ol>
        </li>
      </ol>

      {@html `
      <pre><code class="lang-ts">
      <span class="hljs-keyword">import</span> triangleVertWGSL <span class="hljs-keyword">from</span> <span class="hljs-string">'./shaders/triangle.vert.wgsl'</span>;
      <span class="hljs-keyword">import</span> redFragWGSL <span class="hljs-keyword">from</span> <span class="hljs-string">'./shaders/red.frag.wgsl'</span>;

      <span class="hljs-comment">// --- 1. initialize the GPUDevice with a canvas context and a GPUAdapter ----</span>
      <span class="hljs-keyword">const</span> canvas = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">'canvas'</span>) <span class="hljs-keyword">as</span> HTMLCanvasElement;
      <span class="hljs-keyword">const</span> adapter = <span class="hljs-keyword">await</span> navigator.gpu?.requestAdapter();
      <span class="hljs-keyword">const</span> device = <span class="hljs-keyword">await</span> adapter?.requestDevice();
      <span class="hljs-keyword">const</span> context = canvas.getContext(<span class="hljs-string">'webgpu'</span>);

      <span class="hljs-keyword">const</span> devicePixelRatio = <span class="hljs-built_in">window</span>.devicePixelRatio;
      canvas.width = canvas.clientWidth * devicePixelRatio;
      canvas.height = canvas.clientHeight * devicePixelRatio;
      <span class="hljs-keyword">const</span> presentationFormat = navigator.gpu.getPreferredCanvasFormat();

      context.configure({
        device,
        <span class="hljs-attr">format</span>: presentationFormat,
      });

      <span class="hljs-comment">// ---- 2. Define data ----</span>
      <span class="hljs-comment">// data definition and GPUBuffer creation</span>
      <span class="hljs-keyword">let</span> triangle = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Float32Array</span>([
           <span class="hljs-number">0.0</span>,  <span class="hljs-number">0.5</span>, 
          <span class="hljs-number">-0.5</span>, <span class="hljs-number">-0.5</span>, 
           <span class="hljs-number">0.5</span>, <span class="hljs-number">-0.5</span>, 
        ]);
      <span class="hljs-keyword">const</span> vertexBuffer = device.createBuffer({
          <span class="hljs-attr">size</span>:triangle.byteLength,
          <span class="hljs-attr">usage</span>: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
      });

      <span class="hljs-comment">// write actual data into the buffer</span>
      <span class="hljs-keyword">new</span> <span class="hljs-built_in">Float32Array</span>(vertexBuffer.getMappedRange()).set(triangle);
      vertexBuffer.unmap();


      <span class="hljs-comment">// ---- 3. Renderpipeline Creation ----</span>
      <span class="hljs-comment">// create a renderpipeline with automatic layout detection</span>
      <span class="hljs-comment">// explicitly define the input of the vertex stage as a buffer of 2D float vectors</span>
      <span class="hljs-keyword">const</span> pipeline = device.createRenderPipeline({
        <span class="hljs-attr">layout</span>: <span class="hljs-string">'auto'</span>,
        <span class="hljs-attr">vertex</span>: {
          <span class="hljs-attr">module</span>: device.createShaderModule({
            <span class="hljs-attr">code</span>: triangleVertWGSL,
          }),
          <span class="hljs-attr">buffers</span>: [
              {
                  <span class="hljs-attr">arrayStride</span>: <span class="hljs-number">2</span>*<span class="hljs-number">4</span>,
                  <span class="hljs-attr">attributes</span>:[
                  {
                      <span class="hljs-attr">shaderLocation</span>:<span class="hljs-number">0</span>,
                      <span class="hljs-attr">offset</span>:<span class="hljs-number">0</span>,
                      <span class="hljs-attr">format</span>: <span class="hljs-string">'float32x2'</span>
                  }]
              }]
        },
        <span class="hljs-attr">fragment</span>: {
          <span class="hljs-attr">module</span>: device.createShaderModule({
            <span class="hljs-attr">code</span>: redFragWGSL,
          }),
          <span class="hljs-attr">targets</span>: [
            {
              <span class="hljs-attr">format</span>: presentationFormat,
            },
          ],
        },
        <span class="hljs-attr">primitive</span>: {
          <span class="hljs-attr">topology</span>: <span class="hljs-string">'triangle-list'</span>,
        },
      });

      <span class="hljs-comment">// ---- 4. Renderloop ----</span>

      <span class="hljs-comment">/**
       * This function is called each frame
       */</span>
      <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">frame</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-comment">// create a commandEncoder to collect all GPU commands for the current frame </span>
        <span class="hljs-keyword">const</span> commandEncoder = device.createCommandEncoder();
        <span class="hljs-keyword">const</span> textureView = context.getCurrentTexture().createView();

        <span class="hljs-comment">// create a descriptor to define how data is treated in the renderpass</span>
        <span class="hljs-keyword">const</span> renderPassDescriptor: GPURenderPassDescriptor = {
          <span class="hljs-attr">colorAttachments</span>: [
            {
              <span class="hljs-attr">view</span>: textureView,
              <span class="hljs-attr">clearValue</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>], <span class="hljs-comment">// Clear to transparent</span>
              loadOp: <span class="hljs-string">'clear'</span>,
              <span class="hljs-attr">storeOp</span>: <span class="hljs-string">'store'</span>,
            },
          ],
        };

        <span class="hljs-comment">// start to record GPU commands</span>
        <span class="hljs-keyword">const</span> passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        <span class="hljs-comment">// set the pipeline which includes for example what shader the triangle should use</span>
        passEncoder.setPipeline(pipeline);
        <span class="hljs-comment">// draw one triangle from 3 vertecies </span>
        passEncoder.setVertexBuffer(<span class="hljs-number">0</span>, vertexBuffer);
        passEncoder.draw(<span class="hljs-number">3</span>);
        passEncoder.end();

        device.queue.submit([commandEncoder.finish()]);
        requestAnimationFrame(frame);
      }

      requestAnimationFrame(frame);
      </code></pre>
`}
      <p>And here is the Vertex and Fragment Code:</p>

      {@html `
<pre><code class="lang-wgsl">
      <span class="hljs-comment">// the vertex function is executed for each vertex, in our case three times.</span>
      <span class="hljs-comment">// it takes a 2D vector and returns a 4D vector, normally there would be a converting step from world to camera space</span>
      <span class="hljs-variable">@vertex</span>
      fn main(
        <span class="hljs-variable">@location</span>(<span class="hljs-number">0</span>) <span class="hljs-attribute">position</span>: vec2f 
      ) -&gt; <span class="hljs-variable">@builtin</span>(position) vec4f {
        <span class="hljs-selector-tag">return</span> <span class="hljs-selector-tag">vec4f</span>(position, <span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>);
      }

      <span class="hljs-comment">// the fragment function is executed for each pixel to be colored</span>
      <span class="hljs-comment">// here the color is RED (RGBA)</span>
      @<span class="hljs-selector-tag">fragment</span>
      <span class="hljs-selector-tag">fn</span> <span class="hljs-selector-tag">main</span>() <span class="hljs-selector-tag">-</span>&gt; @<span class="hljs-selector-tag">location</span>(<span class="hljs-number">0</span>) <span class="hljs-selector-tag">vec4f</span> {
        <span class="hljs-selector-tag">return</span> <span class="hljs-selector-tag">vec4f</span>(<span class="hljs-number">1.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>);
      }
</code></pre>
`}
      <p>
        In this example you can see that you need a lot of code to just render a
        single triangle on screen. The code is also not very flexible and does
        not include any steps like converting vertex positions from local- to
        world- to camera space. But it outlines the general workflow flow of
        WebGPU. You need to first prepare data and define all processing steps.
        Then you need to start recording the GPU commands. While recording, for
        each object to render (here only a single triangle) you need to set the
        correct RenderPipeline configuration, the correct data and dispatch a
        draw call. Only after submitting the command queue, the GPU starts to
        execute all commands given to it.
      </p>
      <p>
        This process feels tedious, but it&#39;s designed to be! By not
        abstracting away many things and having &quot;direct&quot; contact with
        the GPU you have a very strong control on what exactly the GPU has to
        do. In the world of graphics programming and real time rendering, this
        can make the difference between running with 30 or 144 frames per
        second.
      </p>
      <blockquote>
        <p>
          <strong>Note:</strong> 144 frames per second is a common refresh rate for
          gaming monitors, while 30 frame a second is commonly agreed to be &#39;barely
          enough&#39; to play a video game smoothly
        </p>
      </blockquote>
      <h2 id="webgpu-for-developing-games">WebGPU for developing games</h2>
      <p>
        To really get a feeling for WebGPU, I decided to create a very, very
        small tech demo with no actual gameplay. The idea was to have a boat
        floating on water with a pretty background and to be able to cast a
        fishing rod and move left and right. I choose those use cases because
        they can demonstrate what actual problems in game development can look
        like and how to solve them with a graphics API like WebGPU. But first,
        allow me a brief detour.
      </p>
      <h3 id="ecs-entity-component-system">ECS - Entity Component System</h3>
      <p>
        Perhaps you, dear reader, know about the Model View Controller paradigm
        used everywhere in software development. MVC is mostly about decoupling
        and centered around presentation and controlling. The biggest flaw (in
        terms of high performance computing for games) of MVC is the memory
        layout. A typical model class, like a player, contains many different
        data points, which are often stored side by side. Acting on those models
        requires the loading of their data into the CPU. Because of the CPU and
        memory architecture, there will be data fetched and cached that is not
        needed. The problem gets even worse if you consider CPU branch
        prediction and ahead of time caching. MVC systems can be very
        unpredictable when it comes to the memory usage patterns, especially
        when many indirections are used.
      </p>
      <p>
        To tackle this problem, modern game titles are using an Entity Component
        System, or ECS. It consists of three parts:
      </p>
      <p>
        <strong>Entities</strong> are just identifiers, which are represented as
        strings or, most of the time, just numbers.
      </p>
      <p>
        <strong>Components</strong> describe properties of entities like a position
        in 3D space, mesh data, animation data, etc. . They are stored in minimal
        structures / classes with no functions. Being minimal means that only data
        which is usually accessed together is actual stored together. So, for example,
        the 3D position, the mesh data and the animation data, would all be stored
        in individual structs/classes. Every kind of component is then stored in
        its own map.
      </p>
      <p><strong>Systems</strong> take components as input and modify them.</p>
      <p>To better understand this, consider the following example:</p>
      <p>
        There is a <code>PhysicsBodyComponent</code> and a
        <code>TransformComponent</code>. The <code>PhysicsBody</code> has a
        <code>Velocity</code>
        while the <code>Transform</code> has a 3D <code>Position</code>. We
        could create a <code>PhysicsCalculationSystem</code> which takes a
        <code>Map&lt;number, PhysicsBodyComponent&gt;</code>
        and a <code>Map&lt;number,TransformComponent&gt;</code>. Then the system
        iterates over all <code>PhysicsBodyComponents</code>, also queries the
        corresponding <code>TransformComponent</code> and calculates a new
        <code>position</code>
        and updates the <code>TransformComponent</code>. In code this could look
        something like this:
      </p>

      {@html `
<pre><code class="lang-ts">
      class PhysicsCalculationSystem {
        update(
          translates : Map&lt;number, TransformComponent&gt;,
          physicsBodies : Map&lt;number, PhysicsBodyComponent&gt;
        ){
          <span class="hljs-keyword">for</span>(<span class="hljs-built_in">var</span> [id, physicsBody] of physicsBodies) {
            <span class="hljs-built_in">let</span> <span class="hljs-built_in">translate</span> = translates.<span class="hljs-built_in">get</span>(id);

            <span class="hljs-keyword">if</span>(!<span class="hljs-built_in">translate</span>){
              continue;
            }

            <span class="hljs-built_in">translate</span>.<span class="hljs-built_in">position</span> = <span class="hljs-built_in">translate</span>.<span class="hljs-built_in">position</span> + physicsBody.velocity;
          }
        }
      }
</code></pre>
`}
      <blockquote>
        <p>
          <strong>Note</strong>: the actual calculation for applying a velocity
          may differ
        </p>
      </blockquote>
      <p>
        This code has a huge advantage: the memory layout is data oriented,
        allowing much higher CPU throughput rates and bypassing CPU bandwidth
        bottlenecks because only data that is actually used is loaded. Another
        neat feature of this memory layout is that systems act on a whole array,
        making CPU caching and branch prediction much simpler and more
        efficient. With such a predictable layout, SIMD operations, for example,
        can be more easily used by the optimizer. For those reasons, Entity
        Component Systems are the de facto standard for modern data intensive
        applications in Realtime Graphics / Gaming. But because this document is
        about WebGPU and not game engines, I won&#39;t bother explaining exactly
        how non WebGPU related code works in detail. One thing you should have
        in mind is the idea of composition over inheritance. Adding properties
        and data by just creating components and linking them to entities works
        great with the more resource oriented WebGPU API than with other
        statemachine oriented APIs like WebGL. Furthermore, this allows for the
        aforementioned advantages.
      </p>
      <blockquote>
        <p>
          The data oriented approach is actually the same idea which drives
          Column oriented Database management systems, allowing them to
          outperform Row oriented DBMSs in terms of complex read intensive
          queries
        </p>
      </blockquote>
      <p>End of detour.</p>
      <p>
        With that out of the way, we can also understand what role WebGPU takes
        when developing a game. There should be a <code>RenderSystem</code>
        having all data related to rendering as input. Then this system should configure
        the <code>GPURenderPipeline</code> as needed and dispatch data and commands
        to the GPU. Data used for rendering can be stored in a component. The component
        I developed for this example is defined as follows:
      </p>

      {@html `
<pre><code class="lang-ts">
      <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MeshRenderComponent</span> </span>{
          material: Material;

          <span class="hljs-comment">// mesh data</span>
          meshVAO: GPUBuffer;
          vertexCount: number;

          <span class="hljs-comment">// indexed rendering </span>
          indexed: boolean
          indexBuffer: GPUBuffer | <span class="hljs-literal">null</span>;
          indexCount: number;

          <span class="hljs-keyword">constructor</span>(material: Material,
              meshVAO: GPUBuffer,
              vertexCount: number,
              indexed: boolean = <span class="hljs-literal">false</span>,
              indexBuffer: GPUBuffer | <span class="hljs-literal">null</span> = <span class="hljs-literal">null</span>,
              indexCount: number = <span class="hljs-number">0</span>) {

              <span class="hljs-keyword">this</span>.material = material;
              <span class="hljs-keyword">this</span>.meshVAO = meshVAO;
              <span class="hljs-keyword">this</span>.vertexCount = vertexCount;

              <span class="hljs-comment">// optional indexed rendering</span>
              <span class="hljs-keyword">this</span>.indexed = indexed;
              <span class="hljs-keyword">this</span>.indexBuffer = indexBuffer;
              <span class="hljs-keyword">this</span>.indexCount = indexCount;
          }
      }
      </code></pre>
`}
      <p>
        The component contains mesh data, dispatchable to the GPU. It also
        contains a material, which defines GPU resources, for example, the color
        and shader module to use to render the material.
      </p>
      <p>
        The actual update function of the <code>RenderSystem</code> looks like this:
      </p>

      {@html `
<pre><code class="lang-ts">
      <span class="hljs-attribute">update(commandEncoder</span>: GPUCommandEncoder,
          <span class="hljs-attribute">instanceBuffer</span>: GPUBuffer,
          <span class="hljs-attribute">opaqueBatches</span>: RenderBatch[],
          <span class="hljs-attribute">currentTextureView</span>: GPUTextureView,
          <span class="hljs-attribute">dsAttachment</span>: GPURenderPassDepthStencilAttachment): void {

      <span class="pf">    const renderPassDescriptor: GPURenderPassDescriptor = {
              colorAttachments: [{
                  view: currentTextureView,
                  <span class="hljs-built_in">load</span>Op: 'clear',
                  storeOp: 'store',
                  clearValue: { r: <span class="hljs-number">0.1</span>, g: <span class="hljs-number">0.2</span>, b: <span class="hljs-number">0.3</span>, a: <span class="hljs-number">1.0</span> },
              }],

              depthStencilAttachment: {
                  view: dsAttachment.view,
                  stencilLoadOp: 'clear',
                  stencilStoreOp: 'store',
                  depthLoadOp: 'clear',
                  depthStoreOp: 'store',
                  depthClearValue: <span class="hljs-number">1.0</span>,
              },
          };

          const <span class="hljs-built_in">pass</span>Encoder = commandEncoder.beginRenderPass(renderPassDescriptor);

          <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>BindGroup(<span class="hljs-number">0</span>, this.<span class="hljs-keyword">global</span>BindGroup);

          // <span class="hljs-literal">all</span> batches
          <span class="hljs-keyword">for</span> (const batch of opaqueBatches) {

              if (batch.indexed &amp;&amp; batch.indexBuffer) {
                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>Pipeline(batch.pipeline);
                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>BindGroup(<span class="hljs-number">1</span>, batch.constantsBindGroup);

                  if (batch.textureBindGroup) {
                      <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>BindGroup(<span class="hljs-number">2</span>, batch.textureBindGroup);
                  }

                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>VertexBuffer(<span class="hljs-number">0</span>, batch.meshBuffer);
                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>VertexBuffer(<span class="hljs-number">1</span>, instanceBuffer);
                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>IndexBuffer(batch.indexBuffer, GPUIndexFormat.Uint32);

                  <span class="hljs-built_in">pass</span>Encoder.drawIndexed(batch.indexCount, batch.instanceCount, <span class="hljs-number">0</span>, batch.instanceOffset);
              }
              else {
                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>Pipeline(batch.pipeline);
                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>BindGroup(<span class="hljs-number">1</span>, batch.constantsBindGroup);

                  if (batch.textureBindGroup) {
                      <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>BindGroup(<span class="hljs-number">2</span>, batch.textureBindGroup);
                  }

                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>VertexBuffer(<span class="hljs-number">0</span>, batch.meshBuffer);
                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>VertexBuffer(<span class="hljs-number">1</span>, instanceBuffer);

                  <span class="hljs-built_in">pass</span>Encoder.draw(batch.vertexCount, batch.instanceCount, <span class="hljs-number">0</span>, batch.instanceOffset);
              }
          }

          <span class="hljs-built_in">pass</span>Encoder.end();
      }</span>
</code></pre>
`}
      <p>
        Because of batching, instancing, and indexed rendering, the code is a
        little convoluted. A batch is a group of renderable data that shares the
        same PipelineConfiguration. Rendering in batches increases the
        performance of the GPU drastically because switching pipeline
        configurations costs a lot of time. The code does the following things
        in order:
      </p>
      <ol>
        <li>Create a CommandEncoder and begin a new Renderpass</li>
        <li>
          Bind all data that does not change between different batches within
          the time of the current frame (e.g. the current time or CameraPosition
          )
        </li>
        <li>
          For each batch, configure the pipeline as needed. This includes
          setting shaders, textures, and mesh layouts
        </li>
        <li>
          Upload geometry data by setting the vertex buffer (and index buffer)
        </li>
        <li>Dispatch an (indexed) draw call</li>
      </ol>
      <p>
        This general purpose render pass can render all renderable and opaque
        entities in this demo.
      </p>
      <h3 id="subdivision-with-compute-shaders">
        Subdivision with Compute Shaders
      </h3>
      <p>
        Because one of the most valuable new features of WebGPU is the compute
        shader, I decided to also introduce a compute shader into the project.
        For that, I decided to create a subdivision compute shader, which takes
        a single quad, consisting of four positions, and subdivides it into many
        smaller triangles to create more detail on the water surface. Normally
        you would use a tessellation shader to dynamically add mesh details.
        Unfortunately, WebGPU does not have a tessellation stage, thus, a
        compute shader has to be used. Even if you are technically able to do
        anything you want in a compute shader, like tessellation, it has one
        drawback. While tessellation is done after the vertex shader, the
        compute shader has to run before the vertex shader. This has the
        consequence that if mesh data is enriched in detail and new vertices are
        created, the vertex shader has a lot more work to do. But in the case of
        this small demo, this is not a problem.
      </p>
      <p>
        The following code is a sample from the <a href="">subdivider.ts</a>
        file, which contains the logic to dispatch the compute shader from
        <a href="">subdivision.wgsl</a>.
      </p>
      <p>The example has two phases:</p>
      <ol>
        <li>
          <p>
            The GPU is instructed to do the computations with the specified
            compute pipeline and bind group.
          </p>
        </li>
        <li>
          <p>
            The augmented data inside the GPU memory has to be written back into
            main memory to be able to be handled by the CPU
          </p>
        </li>
      </ol>

      {@html `
<pre><code class="lang-ts"><span class="hljs-comment">
      // ##### COMPUTE PASS #####</span>
      <span class="hljs-keyword">let</span> commandEncoder = <span class="hljs-keyword">this</span>.device.createCommandEncoder();
      <span class="hljs-keyword">const</span> computePass = commandEncoder.beginComputePass({
          <span class="hljs-attr">label</span>: <span class="hljs-string">'Quad Subdivision Compute Pass'</span>,
      });

      computePass.setPipeline(<span class="hljs-keyword">this</span>.computePipeline);
      computePass.setBindGroup(<span class="hljs-number">0</span>, bindGroup);

      <span class="hljs-comment">// dispatch enough threads to handle all points on the grid</span>
      <span class="hljs-keyword">const</span> workgroupSize = <span class="hljs-number">8</span>;
      <span class="hljs-keyword">const</span> dispatchX = <span class="hljs-built_in">Math</span>.ceil(<span class="hljs-keyword">this</span>.GRID_SIZE_X / workgroupSize);
      <span class="hljs-keyword">const</span> dispatchY = <span class="hljs-built_in">Math</span>.ceil(<span class="hljs-keyword">this</span>.GRID_SIZE_Y / workgroupSize);
      computePass.dispatchWorkgroups(dispatchX, dispatchY);
      computePass.end();
      <span class="hljs-comment">// ##### END COMPUTE PASS #####</span>

      commandEncoder.copyBufferToBuffer(
          <span class="hljs-keyword">this</span>.outputPointsBuffer,
          <span class="hljs-number">0</span>,
          <span class="hljs-keyword">this</span>.readbackPointsBuffer,
          <span class="hljs-number">0</span>,
          <span class="hljs-keyword">this</span>.readbackPointsBuffer.size
      );

      commandEncoder.copyBufferToBuffer(
          <span class="hljs-keyword">this</span>.outputIndexBuffer,
          <span class="hljs-number">0</span>,
          <span class="hljs-keyword">this</span>.readbackIndexBuffer,
          <span class="hljs-number">0</span>,
          <span class="hljs-keyword">this</span>.readbackIndexBuffer.size
      );

      <span class="hljs-keyword">this</span>.device.queue.submit([commandEncoder.finish()]);

      <span class="hljs-keyword">await</span> <span class="hljs-keyword">this</span>.readbackPointsBuffer.mapAsync(GPUMapMode.READ);
      <span class="hljs-keyword">await</span> <span class="hljs-keyword">this</span>.readbackIndexBuffer.mapAsync(GPUMapMode.READ);

      <span class="hljs-keyword">const</span> arrayBuffer = <span class="hljs-keyword">this</span>.readbackPointsBuffer.getMappedRange();
      <span class="hljs-keyword">const</span> arrayBufferIndex = <span class="hljs-keyword">this</span>.readbackIndexBuffer.getMappedRange();

      <span class="hljs-keyword">const</span> resultPoints = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Float32Array</span>(arrayBuffer).slice();
      <span class="hljs-keyword">const</span> resultIndex = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Uint32Array</span>(arrayBufferIndex).slice();

      <span class="hljs-keyword">this</span>.readbackPointsBuffer.unmap();
      <span class="hljs-keyword">this</span>.readbackIndexBuffer.unmap();
</code></pre>
`}
      <p>
        The effect of this subdivision is clearly visible when experimenting
        with different subdivision sizes, as seen in the following images:
      </p>
      <p>
        <img
          style="display: block; margin-left: auto; margin-right: auto; width: {uiSettings.isMobile
            ? '100%'
            : '80%'};"
          src={water_low}
          alt="low resolution water"
        />
      </p>
      <blockquote>
        <p>Water with a 16x16 Subdivision (450 Tris)</p>
      </blockquote>
      <p>
        <img
          style="display: block; margin-left: auto; margin-right: auto; width: {uiSettings.isMobile
            ? '100%'
            : '80%'};"
          src={water_high}
          alt="high resolution water"
        />
      </p>
      <blockquote>
        <p>Water with a 64x64 Subdivision (7.938 Tris)</p>
      </blockquote>
      <p>
        <img
          style="display: block; margin-left: auto; margin-right: auto; width: {uiSettings.isMobile
            ? '100%'
            : '80%'};"
          src={water_extreme}
          alt="extreme resolution water"
        />
      </p>
      <blockquote>
        <p>Water with a 512x512 Subdivision (522.242 Tris)</p>
      </blockquote>
      <p>
        Even with over half a million triangles, the demo still runs with the
        target framerate of 100 Frames a second.
      </p>
      <h2 id="where-to-use-webgpu">Where to use WebGPU</h2>
      <p>
        As seen, WebGPU is a high performance API, desigend to be a modern
        abstraction of a GPU, like Vulkan, but for the web. WebGPU offers the
        bare minimum to do tasks like rendering and computing on the GPU. This
        creates a problem when viewing WebGPU from the angle of fast-paced web
        development and prototyping. Of course it&#39;s possible to create a
        really nice (and resource-efficient) webpage using WebGPU to do a
        &quot;3D scroll effect&quot; like on <a href="https://silencio.es/"
          >this page</a
        >. Or even to program games directly for the web, but that&#39;s not
        what WebGPU is targeting.
      </p>
      <p>
        WebGPU is a modern foundation for other libraries like Three.js or
        Babylon.js. Those libraries simplify many difficult concepts by hiding
        them behind simple to use abstractions. One such case is material
        management. Materials describe properties of 3D objects and how exactly
        those objects should be rendered. Because WebGPU does not have the
        concept of materials built in, the developer needs to do its own
        implementation of materials, its caching, and so on. Libraries like
        Three.js already implement those difficult tasks so that a developer
        only needs to specify the properties of a material and Three.js
        automatically configures the render pipeline to correctly render the 3D
        scene with all different materials. Also, tasks like the transformation
        from local to world to camera-space and the management and execution of
        different render passes with the correct render order are way simpler in
        Three.js.
      </p>
      <p>
        When looking at games in the browser, a similar picture arises. It&#39;s
        way more important to have good tools to create and iterate fast than to
        have the fullest of control. While you can create a game with WebGPU
        directly, game engines like Unity can compile to WebGPU. Only in the
        rarest cases is it useful to use WebGPU directly. The game demo I
        created in this project has about 3200 lines of TypeScript code. A major
        part of this is controlling and managing resources. A very similar game
        could be created in a few hundred lines of code by just using Unity and
        then compiling to WebGPU.
      </p>
      <h2 id="final-words">Final words</h2>
      <p>
        WebGPU is a modernization of WebGL, the foundation for every 3D
        application running in the browser. WebGPU is a boring technology!
        It&#39;s boring because it can afford to be boring. WebGPU does not need
        to have a user friendly, easy to use, and flashy list of functionalities
        like other web libraries and frameworks (e.g., React or Tree.js). WebGPU
        is simply a very powerful and modern abstraction of the GPU, and most
        developers, especially &quot;normal&quot; web developers, will never
        even use it directly. It is simple and powerful, but code gets very
        complex when trying to do the right abstractions yourself.
      </p>
      <p>
        Perhaps you are asking youself: <strong
          >Should I use WebGPU for X</strong
        >? I can very confidently say that you probably shouldn&#39;t. The
        following use cases are the only ones I can think of where asking this
        question is valid:
      </p>
      <ol>
        <li>You are creating a 3D render library like Three.js</li>
        <li>You don&#39;t want to have any dependencies</li>
        <li>You need absolute control over everything happening on the GPU</li>
        <li>You want to learn about rendering and the GPU in general</li>
      </ol>
      <p>
        Even if you are creating a 3D library or a high performance 3D
        application like a web based MRI viewer, you should at least consider
        using an abstraction to WebGPU like Three.js. Libraries like Three.js
        are maintained by many very skilled people who know exactly what they
        are doing. I would say the probability of creating an application
        directly with WebGPU having a better performance than a similar
        application created by using an abstraction layer like three.js is very
        small. This is because every minuscule design decision can impact the
        performance of the final application in a major way.
      </p>
      <p>
        Does this mean WebGPU is not usefull? NO! Quite the opposite. WebGPU is
        useful and long overdue. It brings modern GPU programming to the web,
        but nothing more. It will be forever a technology hidden behind
        brilliant abstractions, powering parts of the web without most people
        even noticing it.
      </p>
      <p>Now I present you the demo in all its glory:</p>

      <section id="playableDemo">
        <h1>Demo</h1>

        <h2 class="text-xl">Some things to notice</h2>
        <p>
          To create this demo, I have coded many things that won&#39;t be
          noticed until you look at the code or have experience in the field of
          graphics programming. Here&#39;s a quick list of features. What I have
          created includes but is not limited to:
        </p>
        <ul>
          <li>
            <p>
              The concept of materials and the management of those A material
              contains everything needed to give a mesh its look. This includes
              textures, material properties, shaders, and so on.
            </p>
          </li>
          <li>
            <p>
              Different render passes to render different parts of the scene,
              like opaque objects, transparent objects, and HUD elements, which
              are using an orthogonal projection
            </p>
          </li>
          <li>
            <p>
              A system to render text Text is inherently hard to draw because
              there is no concept of text when rendering. You need to create a
              dynamic mesh on the fly, which then gets a texture of the text.
              For that you also need to have a font atlas, which is just all the
              letters and icons you want to have in your font in a texture.
            </p>
          </li>
          <li>
            <p>
              A parallax effect in the background The parallax effect is done by
              splitting a background image in multiple layers and scrolling them
              at different speeds to create the illusion of movement and depth
            </p>
          </li>
          <li>
            <p>
              An animation system Animating the fishing line of the boat while
              swimming and fishing is done with a texture atlas. Having a big
              texture that contains all animations of the boat and just choosing
              which part to render in which state allows for lower GPU usage
              because textures do not need to be replaced and reuploaded to the
              GPU&#39;s memory.
            </p>
          </li>
          <li>
            <p>
              Making procedural waves To create waves on the ocean, a vertex
              shader is used. It calculates a y-offset based on the xz-position
              of the vertex. Normally you would use noise (e.g., Perlin noise),
              but here I am just using several overlaid sin functions.
            </p>
          </li>
          <li>
            <p>
              Moving the boat with the waves To move the boat with the waves,
              the calculations from the vertex shader of the waves are also
              applied to the vertices of the boat. To rotate the boat so that it
              swims up and down the waves, an approximation of the slope of the
              current wave position is used to create a rotation matrix. All
              done in the vertex shader of the boat.
            </p>
          </li>
          <li>
            <p>
              Coloring of the Water To color the water, the water&#39;s fragment
              shader uses the y-offset of the vertices. There are two
              interpolations used. The flat interpolation ensures that the low
              parts of the water are dark and the high parts are bright while
              creating a stylized low-poly look. To highlight the tops of the
              waves often having bright white foam in real life, a smooth
              interpolation is used. You can see the difference when observing
              the borders of the triangles. While you can see the borders within
              the low part of a wave, you can&#39;t see borders in the foam
              part. The foam appears uniform and smooth.
            </p>
          </li>
        </ul>
        <p>
          I highly recommend you also look at the code to see how much work is
          needed to do the most basic things most of us just take for granted
          when thinking of video games.
        </p>

        <h2 class="text-xl">Controls</h2>

        <table>
          <thead>
            <tr>
              <th style="text-align:left">Input</th>
              <th style="text-align:left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:left"><code>A & D</code></td>
              <td style="text-align:left">Move left and right</td>
            </tr>
            <tr>
              <td style="text-align:left"><code>F</code></td>
              <td style="text-align:left">Cast / Reel in the line</td>
            </tr>
            <tr>
              <td style="text-align:left"><code>C</code></td>
              <td style="text-align:left">Toggle freecam</td>
            </tr>
          </tbody>
        </table>

        <p>
          Besides the default controls there is a freecam used while debugging
          which is controlled as follows:
        </p>

        <table>
          <thead>
            <tr>
              <th style="text-align:left">Input</th>
              <th style="text-align:left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:left"><code>W, A, S, D</code></td>
              <td style="text-align:left">Fly in any direction</td>
            </tr>
            <tr>
              <td style="text-align:left"><code>Q & E</code></td>
              <td style="text-align:left">Fly down and up</td>
            </tr>
            <tr>
              <td style="text-align:left"><code>Mouse</code></td>
              <td style="text-align:left">Look around</td>
            </tr>

            <tr>
              <td style="text-align:left"><code>C</code></td>
              <td style="text-align:left">Toggle freecam</td>
            </tr>
          </tbody>
        </table>

        <p>
          There is also a <b>highly experimental</b> feature:<br />
          While in <b>freecam</b> you can aim at an object and press the
          <b>left mousebutton</b> to select an object. Then you can
          <b>hold shift</b> and <b>move the mouse</b> to move the object in the 3d
          scene. This does NOT work on the water plane because it's subdivided at
          runtime.
        </p>
      </section>
    </div>
    <hr />

    {#if !gpuAvailable}
      <h2 class="text-center">
        WebGPU is not available or enabled in your browser, no demo today :(
      </h2>
    {:else}
      <h2>Playable Demo</h2>

      <blockquote>
        <p>
          <b>Note:</b> The water plane is just placed in the world and not
          moved, thats why its possible to swim off the edge. This problem could
          be fixed by just moving the water with the boat and using an x-offset
          while calculating the waves y-offset in the fragment shader.
          <br />
          This would result in the water being "stuck" to the boat, always being
          in the viewing frustum thus apearing to be endless.
        </p>
      </blockquote>

      <blockquote>
        <p>
          <b>Also Note:</b> You have to click into the canvas to control the boat.
          The canvas will request a pointerlock to ensure you can move normally in
          freecam. To get you cursor back just press escape.
        </p>
      </blockquote>
      <canvas
        bind:this={pond_canvas}
        id="gfx-main"
        tabindex="0"
        width="1920"
        height="1080"
        style="aspect-ratio: 16/9; width: 100%;"
      ></canvas>
    {/if}
  </div>
</main>

<style>
  @import "$lib/components/ui95/assets/ui95.css";
  a {
    color: var(--color-winblue-500);
  }
  a:visited {
    color: purple;
  }
  a:hover {
    text-decoration: underline;
  }

  ul {
    list-style-type: disc;
    margin: 0;
    padding-left: 1.5em;
  }

  li {
    line-height: 1.5;
  }

  h1 {
    font-size: xxx-large;
  }

  h2 {
    font-size: 35px;
    padding: 0;
    margin-top: 1em;
    margin-bottom: 0em;
    font-weight: bold;
    text-decoration: underline;
  }

  h3 {
    font-size: 28px;
    padding: 0;
    margin-top: 1em;
    margin-bottom: 0em;
    font-weight: bold;
    text-decoration: underline;
  }
  h4 {
    font-size: 22px;
    padding: 0;
    margin-top: 1em;
    margin-bottom: 0em;
    font-weight: bold;
    text-decoration: underline;
  }

  p {
    padding: 0;
    margin-bottom: 1em;
  }

  blockquote {
    background: lightgray;
    padding-left: 1em;
    padding-right: 1em;
  }

  table {
    margin: 10px;
    width: 100%;
  }

  table > thead {
    border-bottom: 2px;
    border-color: black;
    border-bottom-style: solid;
  }

  td {
    padding-right: 10px;
    border-bottom-color: gray;
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }

  .img-in-text {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
</style>
