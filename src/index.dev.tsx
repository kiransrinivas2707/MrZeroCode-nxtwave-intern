import { useState } from "react";

import Block from "./index.block";
import {
  AbstractActions,
  MockPluginBridgeProvider
} from "@productgenie/plugin-bridge";
import { Config, configSchema } from "./block-config";
import { RenderConfigurer } from "@productgenie/plugin-config-utils";
import { configurer } from "./block-configurer";
import { AbstractDatasource } from "@productgenie/datasource";

const mockDatasource = new (class extends AbstractDatasource {
  // todo: impl mock datasource here
})();

const mockActions = new (class extends AbstractActions {
  // todo: impl mock actions here
})();

export const Dev = () => {
  const [config, setConfig] = useState<Config>({
    text1: "Head's up.",
    icon1: "info",
    color1:"#E8F5FD",
    borderColor1:"#4E65DA",
    text2: "You sure?",
    icon2: "error",
    color2:"#F5EDB882",
    borderColor2:"#CFA242",
    text3: "Sorry.",
    icon3: "warning",
    color3:"#F7E6E6",
    borderColor3:"#CA3131",

  });

  return (
    <MockPluginBridgeProvider datasource={mockDatasource} actions={mockActions}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, maxHeight: "100vh", overflowY: "auto" }}>
          <Block config={config} />
        </div>
        <div style={{ flex: 1, maxHeight: "100vh", overflowY: "auto" }}>
          <RenderConfigurer
            configurer={configurer}
            configSchema={configSchema}
            config={config}
            onConfigChange={(newConfig) => {
              setConfig(newConfig as Config);
            }}
          />
        </div>
      </div>
    </MockPluginBridgeProvider>
  );
};
