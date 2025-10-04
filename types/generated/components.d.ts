import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    builtWith: Schema.Attribute.String;
    designedDevelopedBy: Schema.Attribute.String;
    externalLinks: Schema.Attribute.Component<'shared.button', true>;
  };
}

export interface GlobalPersonnelInformation extends Struct.ComponentSchema {
  collectionName: 'components_global_personnel_informations';
  info: {
    displayName: 'personnelInformation';
  };
  attributes: {
    currentRole: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    firstName: Schema.Attribute.String;
    github: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    lastName: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    external: Schema.Attribute.Boolean;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface TechnicalSkillsTools extends Struct.ComponentSchema {
  collectionName: 'components_technical_skills_tools';
  info: {
    displayName: 'tools';
  };
  attributes: {
    icon: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::strapi-plugin-iconhub.iconhub',
        {
          storeIconData: true;
          storeIconName: true;
        }
      >;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.footer': GlobalFooter;
      'global.personnel-information': GlobalPersonnelInformation;
      'shared.button': SharedButton;
      'shared.seo': SharedSeo;
      'technical-skills.tools': TechnicalSkillsTools;
    }
  }
}
