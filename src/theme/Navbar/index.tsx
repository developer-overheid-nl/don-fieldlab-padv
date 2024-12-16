/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { type NavbarItem, useThemeConfig } from "@docusaurus/theme-common";
// import { UtrechtFlexWrapFallback } from "@utrecht/web-component-library-react";
import { NavBar } from '@rijkshuisstijl-community/components-react';


import {
  useActiveDocContext,
  useLayoutDoc,
} from '@docusaurus/plugin-content-docs/client';

// import {
//   NavBar,
//   NavList,
//   NavListLink,
// } from "@utrecht/component-library-react/dist/css-module";
import Logo from "./Logo";
import MobileSidebarToggle from "./MobileSidebar/Toggle";

export default function NavbarLayout(): JSX.Element {
  const navBarItems = useThemeConfig().navbar.items;
  const navInlineStart = navBarItems.filter((item) => item.position === "left");
  const navInlineEnd = navBarItems.filter((item) => item.position === "right");

  console.log(useThemeConfig().navbar);


  console.log(navInlineStart);

  const mappedNavInlineStart = navInlineStart.map(a => {
    return {
      href: '/',
      id: a.label,
      label: a.label
    }
  });

  const { activeDoc } = useActiveDocContext(docsPluginId);
  const doc = useLayoutDoc(docId, docsPluginId);

  return (
    <NavBar
      headingItem={{
        href: '/',
        id: 'heading',
        label: 'Developer Overheid'
      }}
      items={[]}>
      <h1>TEST</h1>
    </NavBar>
  );
}
