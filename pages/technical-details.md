---
title: Technical Details
layout: about
permalink: /tech-details.html
# include CollectionBuilder info at bottom
credits: true
# Edit the markdown on in this file to describe your collection
# Look in _includes/feature for options to easily add features to the page
---

{% include feature/jumbotron.html objectid="/assets/img/technical-details.jpg" heading="Technical Details" text="Nerdy bits that make it work." %} 

{% include feature/nav-menu.html sections="About CollectionBuilder;Technical Details;Design;Logo;Colors;Typography;Accessibility Statement;Citations" %}

## About CollectionBuilder

This digital library is made using [CollectionBuilder](https://collectionbuilder.github.io/) which is an an open source framework for creating digital collection and exhibit websites that are driven by metadata and powered by modern static web technology.

CollectionBuilder is a project of University of Idaho Library's [Digital Initiatives](https://www.lib.uidaho.edu/digital/) and the [Center for Digital Inquiry and Learning](https://cdil.lib.uidaho.edu) (CDIL) following the [Lib-Static](https://lib-static.github.io/) methodology. 
Powered by the open source static site generator [Jekyll](https://jekyllrb.com/) and a modern static web stack, it puts collection metadata to work building beautiful sites.

The basic theme is created using [Bootstrap](https://getbootstrap.com/).
Metadata visualizations are built using open source libraries such as [DataTables](https://datatables.net/), [Leafletjs](http://leafletjs.com/), [Spotlight gallery](https://github.com/nextapps-de/spotlight), [lazysizes](https://github.com/aFarkas/lazysizes), and [Lunr.js](https://lunrjs.com/).
Object metadata is exposed using [Schema.org](http://schema.org) and [Open Graph protocol](http://ogp.me/) standards.

This websites is built using one of their templates, called [CollectionBuilder-CSV](https://collectionbuilder.github.io/csv/) which is their most robust and flexible "stand alone" template for creating digital collection and exhibit websites using Jekyll and a metadata CSV.

See [CB Docs](https://collectionbuilder.github.io/cb-docs/) for detailed information.

## Design

#### Logo

The HCI/d logo has been added to represent that the capstone projects featured in this collection are created by HCI/d students. I also plan to add Indiana University’s logo to this collection, following the guidelines outlined [here](https://www.iu.edu/brand/design/logo-and-marks/index.html), after consulting with the director of the program.

#### Colors

This website primarily follows Indiana University's brand color scheme, as defined on its [official colors page](https://www.iu.edu/brand/design/color.html). The main colors are shown in the palette below, with the primary color highlighted for quick reference. 

{% include feature/pdf.html objectid="https://sayheyakanksha.github.io/hcidepot/assets/pdf/iu-colors.pdf" width="50" caption="HCI /depot Color Palette" %}

You can also view this palette on [Coolors](https://coolors.co/palette/990000-243142-ffffff-006298-800000).

#### Typography

Indiana University's main brand font is *Benton Sans*, as defined on its [official typography page]((https://www.iu.edu/brand/design/typography/index.html)). I encountered some issues setting up local fonts in CollectionBuilder, so for now, I’ve opted to use [*Inter*](https://fonts.google.com/specimen/Inter?query=inter) as a temporary solution. Once the setup is complete, I plan to replace it with Benton Sans for brand consistency.

## Accessibility Statement

I’m committed to making the *HCI /depot* collection accessible to all users. This website is designed with accessibility in mind, using clear structure, keyboard navigation, descriptive image alt text, and color contrast standards to ensure a user-friendly experience for everyone.

If you experience any issues or have feedback on improving accessibility, please reach out at [fakanks@iu.edu](mailto:fakanks@iu.edu). Your input helps make this collection better for everyone.

## Citations

- [Dublin Core Metadata Initiative Terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/)
- [Master’s in Human-Computer Interaction design](https://informatics.indiana.edu/programs/ms-hci.html)
- [Luddy School of Informatics, Computing, and Engineering](https://luddy.indiana.edu/index.html)
- [Indiana University Brand](https://www.iu.edu/brand/design/color.html)
- [ACM Computing Classification System](https://dl.acm.org/ccs)
- [DSpace@MIT](https://dspace.mit.edu/)
- [Stanford Digital Repository](https://sdr.library.stanford.edu/)
- [RightsStatements.org](https://rightsstatements.org/en/)
- [MIME Types](https://www.iana.org/assignments/media-types/media-types.xhtml)
- [LC Name Authority File (LCNAF)](https://id.loc.gov/authorities/names.html)
- [ISO 639 language codes](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes)
- [Date and Time Formats](https://www.w3.org/TR/NOTE-datetime) 
- [CollectionBuilder](https://collectionbuilder.github.io/cb-docs/) 
- [Elden Ring, Bandai Namco Entertainment](https://en.bandainamcoent.eu/elden-ring/elden-ring)
- [Coloors](https://coolors.co/)
- [Z652 Digital Libraries, Fall 2024](https://jawalsh.github.io/z652-Digital-Libraries-FA24/)
- [Comic Book Paratexts](https://biblicon.org/cbp/)
- [Bootstrap Docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/)
- [Authoring Meaningful Alternative Text](https://www.section508.gov/create/alternative-text/)