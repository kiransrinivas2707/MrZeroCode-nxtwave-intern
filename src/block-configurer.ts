import {
  Configurer,
  ConfigurerOptionalPaths
} from "@productgenie/plugin-config-utils";

export const optionals: ConfigurerOptionalPaths = [["settings"]];

export const configurer: Configurer = {
  name: "Text",
  screens: [
    {
      name: "Properties",
      content: [
        {
          type: "text",
          name: ["settings", "name"],
          optional: true,
          hidden: true
        },
        {
          type: "text",
          name: ["settings", "tag"],
          optional: true,
          hidden: true
        },
        {
          type: "text",
          name: ["text1"],
          label: "Text1"
        },
        {
          type: "icon-picker",
          name: ["icon1"],
          label: "Icon1"
        },
        {
          type:"color-picker",
          name: ["color1"],
          label:"Color1"
        },
        {
          type:"color-picker",
          name: ["borderColor1"],
          label:"BorderColor1"
        },
        {
          type: "text",
          name: ["text2"],
          label: "Text2"
        },
        {
          type: "icon-picker",
          name: ["icon2"],
          label: "Icon2"
        },
        {
          type:"color-picker",
          name: ["color2"],
          label:"Color2"
        },
        {
          type:"color-picker",
          name: ["borderColor2"],
          label:"BorderColor2"
        }
        ,
        {
          type: "text",
          name: ["text3"],
          label: "Text3"
        },
        {
          type: "icon-picker",
          name: ["icon3"],
          label: "Icon3"
        },
        {
          type:"color-picker",
          name: ["color3"],
          label:"Color3"
        },
        {
          type:"color-picker",
          name: ["borderColor3"],
          label:"BorderColor3"
        }
      ]
    }
  ]
};
