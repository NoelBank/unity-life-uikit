const PLOP_TEMPLATES_PATH = `templates`;

module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a UIKit component",
    prompts: [
      {
        type: "list",
        name: "location",
        message:
          "Would you like to create a UIKit component or a local component?",
        choices: [
          {
            name: "UIKit Component",
            value: "uikit",
          },
        ],
      },
      {
        type: "list",
        name: "type",
        message: "What type of component would you like to generate?",
        choices: [
          { name: "Function Component", value: "function-component" },
          { name: "Class Component", value: "class-component" },
        ],
      },
      {
        type: "input",
        name: "name",
        message: "How should the component be named? (will be capitalized)",
        filter: (name) =>
          name
            .split(" ")
            .map((part) => part.replace(/\b\w/g, (l) => l.toUpperCase()))
            .join(""),
      },
    ],
    actions: (data) => {
      const actions = [
        {
          type: "add",
          path: "../src/{{location}}/components/{{name}}/{{name}}.tsx",
          templateFile: `${PLOP_TEMPLATES_PATH}/{{type}}.hbs`,
        },
        {
          type: "add",
          path: "../src/{{location}}/components/{{name}}/interfaces.ts",
          templateFile: `${PLOP_TEMPLATES_PATH}/{{type}}.interfaces.hbs`,
        },
      ];

      if (data.location === "uikit") {
        return [
          ...actions,
          {
            type: "add",
            path:
              "../src/{{location}}/components/{{name}}/{{name}}.stories.tsx",
            templateFile: `${PLOP_TEMPLATES_PATH}/stories.hbs`,
          },
          {
            type: "add",
            path:
              "../src/{{location}}/components/{{name}}/{{name}}.module.scss",
            templateFile: `${PLOP_TEMPLATES_PATH}/styles.hbs`,
          },
        ];
      }

      return actions;
    },
  });
};
