---
tags:
  - 'open-api-spec'
  - 'API'
title: 'OpenAPI Spec Generator'
---


De [OAS Generator](https://developer.overheid.nl/tools/oas-generator) genereert een OAS *boilerplate* op basis van minimale configuratie. Het resultaat is een `YAML` of `JSON` template wat gebruikt kan worden om het API design verder in te vullen.

> **Let op:** deze tool is enkel bedoeld om je op weg te helpen met het API design, inclusief herbruikbare componenten en best practices van de [API Design Rules](https://community.developer.overheid.nl/t/api-design-rules/183). Eventuele ontbrekende of foutieve gegevens dienen handmatig toegevoegd of gewijzigd te worden.

Hieronder een voorbeeldconfiguratie:

``` json
{
  "title": "DON API v1",
  "description": "API of developer.overheid.nl (Developer Overheid).",
  "contact": {
    "name": "Team Developer Overheid",
    "email": "developer.overheid@geonovum.nl",
    "url": "https://developer.overheid.nl"
  },
  "resources": [
    {
      "name": "repository",
      "plural": "repositories",
      "readonly": false
    },
    {
      "name": "api",
      "plural": "apis",
      "readonly": true
    }
  ]
}
```

Alle properties zijn verplicht. Hieronder een overzicht:

| Property | Type | Omschrijving |
|-|-|-|
| **title** | `string` | Naam van de API |
| **description** | `string` | Omschrijving van de API |
| **contact** | `ContactObject` | Object met contactgegevens van de API. |
| **resources** | `ResourceObject[]` | Array van resources die de API onsluit. Op basis hiervan worden de paths, methods en models gegenereerd. |

## `ResourceObject`

| Property | Type | Omschrijving |
|-|-|-|
| **name** | `string` | Naam (enkelvoud) van de resource. Juiste casing wordt automatisch gegenereerd. |
| **plural** | `string` | Naam (meervoud) van de resource. Juiste casing wordt automatisch gegenereerd. |
| **readonly** | `boolean` | Indien `false` worden er ook `PUT`, `POST` en `DELETE` methods gegenereerd. |

## `ContactObject`

| Property | Type | Omschrijving |
|-|-|-|
| **name** | `string` | Naam van de contactpersoon/afdeling die over de API gaat. |
| **email** | `string` | E-mailadres van de contactpersoon/afdeling die over de API gaat. |
| **url** | `string` | Website van de contactpersoon/afdeling die over de API gaat. |