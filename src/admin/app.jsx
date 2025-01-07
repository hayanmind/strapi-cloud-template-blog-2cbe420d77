// src/admin/app.js
import React from "react";
import { User } from "@strapi/icons";

const config = {
  locales: ["en"],
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Content Manager",
    },
  },
};

const bootstrap = (app) => {
  app.addMenuLink({
    to: "/content-manager/collection-types/api::service-user.service-user",
    icon: User,
    intlLabel: {
      id: "app.components.LeftMenu.service-users",
      defaultMessage: "Service Users",
    },
    permissions: [
      {
        action: "plugin::content-manager.explorer.read",
        subject: "api::service-user.service-user",
      },
    ],
  });
};

export default {
  config,
  bootstrap,
};
