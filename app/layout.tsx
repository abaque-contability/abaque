import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Providers } from "./providers";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <Providers>
        <AntdRegistry>{children}</AntdRegistry>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
