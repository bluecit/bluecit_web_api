// budget: "budget_one_thousand_to_ten_thousand"
// description: "dfdf"
// email: "dfdf@gdkfd.com"
// hear_bluecit: "dfdf"
// name: "dfdfd"
// phone: "dfdf"

import { integer, select, text, relationship } from "@keystone-6/core/fields";
import { list } from "@keystone-6/core";
// import { isSignedIn, rules } from "../access";

export const ContactForm = list({
  fields: {
    name: text({
      validation: {
        isRequired: true,
      },
    }),
    email: text({
      validation: {
        isRequired: true,
      },
    }),
    description: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    phone: text(),
    budget: select({
      options: [
        { label: "1,000 to 10,000", value: "ONE_THOUSAND_TO_TEN_THOUSAND" },
        { label: "10,000 to 50,000", value: "TEN_THOUSAND_TO_FIFTY_THOUSAND" },
        { label: "50,000 ++", value: "MORE_THAN_FIFTY_THOUSAND" },
      ],
      defaultValue: "Select Your budget",
      ui: {
        displayMode: "select",
        // createView: { fieldMode: "hidden" },
      },
    }),

    howDidYouHearAboutUs: text({
      ui: {
        displayMode: "textarea",
      },
    }),
  },
});
