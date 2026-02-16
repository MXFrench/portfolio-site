import {CogIcon, HomeIcon} from '@sanity/icons'


export const structure = (S) =>
  S.list()
    .title("Base")
    .items([
      // Site Settings Singleton
      S.listItem()
        .title("Site Settings")
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      // Homepage Singleton
      S.listItem()
        .title("Home Page")
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType("homepage")
            .documentId("homepage")
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) => !["siteSettings", "homepage"].includes(listItem.getId())
      ),
    ])