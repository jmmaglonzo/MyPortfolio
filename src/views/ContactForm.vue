<template>
  <section
    class="container flex h-screen flex-col justify-center py-20"
    id="contact"
  >
    <div class="mb-8">
      <sub-heading> contact </sub-heading>
    </div>
    <form
      method="POST"
      action="https://formsubmit.co/3bef10094c818cb3acd43befb83bbd8f"
      class="border-secondary flex flex-col gap-4 border bg-formColor p-4 md:flex-row"
    >
      <div
        class="flex flex-col rounded-sm bg-bodyColor p-6 text-center text-white md:w-1/3 md:text-start"
      >
        <span class="text-sm font-semibold uppercase text-primaryRed"
          >contact information</span
        >
        <p class="mb-2 mt-4 text-xs leading-relaxed md:mb-8 md:text-sm">
          Thank you for expressing your interest in reaching out. Don't hesitate
          to get in touch and contact me here.
        </p>

        <div class="flex justify-center md:justify-start">
          <Icon
            icon="ion:chevron-down-sharp"
            class="animate-bounce text-2xl text-primaryRed"
          />
        </div>
        <ul class="flex flex-col gap-2">
          <li
            class="flex items-center justify-center gap-2 md:justify-normal"
            v-for="(contact, index) in contactLinks"
            :key="index"
          >
            <Icon :icon="contact.icon" />
            <a
              :href="contact.links"
              target="_blank"
              :class="contact.className"
              >{{ contact.details }}</a
            >
          </li>
        </ul>
      </div>

      <div class="flex flex-col space-y-2 text-white md:w-full">
        <div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
          <input
            :type="input.type"
            :name="input.name"
            :class="input.className"
            :placeholder="input.placeholder"
            required=""
            v-for="(input, index) in inputs"
            :key="index"
          />
        </div>

        <textarea
          name="message"
          id="textarea"
          placeholder="Message"
          class="border-secondary h-full border bg-bodyColor p-4 focus:outline-none"
        ></textarea>

        <div class="mx-auto">
          <button
            type="submit"
            class="rounded-sm bg-primaryRed px-20 py-2 uppercase text-white duration-200 hover:bg-primaryRed/80 active:translate-x-2 active:translate-y-1"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contactLinks: [
        {
          links: "https://www.linkedin.com/in/jmmaglonzo/",
          details: "LinkedIn",
          className: "hover:text-primaryRed duration-200",
          icon: "mdi:linkedin",
        },
        {
          links: "mailto:johnmaglonzo@gmail.com",
          details: "johnmaglonzo@gmail.com",
          className: "hover:text-primaryRed text-xs duration-200",
          icon: "ic:outline-email",
        },
        {
          links: "tel:09126532546",
          details: "0912-6532-546",
          className: "hover:text-primaryRed duration-200",
          icon: "ph:phone-light",
        },
      ],
      inputs: [
        {
          type: "text",
          name: "name",
          placeholder: "First Name",
          className:
            "border-secondary w-full border bg-bodyColor px-4 py-1 focus:outline-none",
        },
        {
          type: "text",
          name: "lastName",
          placeholder: "Last Name",
          className:
            "border-secondary w-full border bg-bodyColor px-4 py-1 focus:outline-none",
        },
        {
          type: "email",
          name: "email",
          placeholder: "Email Address",
          className:
            "border-secondary w-full border bg-bodyColor px-4 py-1 focus:outline-none md:col-span-2",
        },
      ],
    };
  },
};
</script>
