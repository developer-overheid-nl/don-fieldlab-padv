---
tags:
  - 'open-source'
---
# Developer Certificate of Origin

Veel projecten vereisen tegenwoordig een DCO als juridische zekerheid over de bijdrage. Als
ontwikkelaar of organisatie teken je op dat moment o.a. voor dat de code die je bijdraagt een eigen
creatie is, of compatible is met de licentie van het projecten.

## Doel

Het doel van Developer Certificate or Origin (DCO) is om juridische gevolgen voor OS project te
mitigeren wanneer een contributor code toevoegt aan het OS-project dat hij juridisch niet had mogen
toevoegen.

## Voorbeeld

Voorbeeld van [Developer Certificate of Origin website](https://developercertificate.org/):

```markdown showLineNumbers title="./DCO.md"
Developer Certificate of Origin
Version 1.1

Copyright (C) 2004, 2006 The Linux Foundation and its contributors.

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.


Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
```

Met Developer Certificate or Origin (DCO) geeft je als contributor bij elke commit expliciet aan dat
het je het recht heeft om deze code bij te dragen aan het OS-project en je begrijpt dat je code zal
worden gebruikt door het project. Het is dan ook belangrijk dat je als auteur zelf de DCO
‘ondertekent’.

## Commit sign off door een contributor

Het is de bedoeling dat ieder commit een regel bevat waarin je aangeeft wie de bijdrage doet en dat
je ervoor tekent dat de code voor je het recht hebt deze code bij te dragen en je begrijpt dat je
code zal worden gebruikt door het OS-project.

`Signed-off-by: Username <myname@organization.org>`

Op de commandline kan dit worden uitgevoerd met een flag op het commit commando:

`git commit --signoff` of `git commit -s`

### Via de GitHub online interface

Het komt voor dat je een kleine wijziging wilt doorvoeren via de online interface van GitHub. Je
kunt dan zelf deze regel toevoegen. Omdat de kans groot is dat je vergeet, heeft Github een feature
geïntroduceerd om dit automatische voor je te doen. Deze github feature is kan in- of uitgeschakeld
worden voor de GitHub organisatie.

Voor andere github organisatie waar deze github feautre niet geactiveerd is, zijn er ook browser
plugins beschikbaar die dit automatisch voor je doen (zoals GitHub - scottrigby/dco-gh-ui: Browser
extension adds DCO Signed-off-by line to commits made with the GitHub browser UI).

### Achteraf wijzigen

Heb je al een commit gedaan zonder de sign-off, dan kan je dat niet meer zo eenvoudig aanpassen via
de GitHub UI. Er zijn een aantal mogelijkheden:

Commit message(s) aanpassen: als je lokaal een git checkout hebt, kan je met dit commando het
laatste commit message aanpassen: `git commit --amend --signoff`

Het is ook mogelijk om meerdere commits te herschrijven: `git rebase --interactive --ammend
--signoff`

Na het herschrijven zal je moeten pushen met de `--force` optie om de git historie op de remote te
overschrijven. 

Opnieuw commit maken: soms is het eenvoudiger om opnieuw te beginnen en gewoon de wijziging opnieuw
te maken, bijvoorbeeld op een andere branch. Dan kan je op dat moment wel de signoff meenemen.

DCO check override: maintainers kunnen de DCO check overrulen om zo de commits zonder signoff toch
te mergen. Het is aan te raden om dan een comment te plaatsen bij het pull-request dat eigenlijk de
DCO wel ondertekend is. Het [Linkerd](https://github.com/linkerd/linkerd2) project hanteert daarvoor
de volgende conventie:

> "I agree to the DCO for all the commits in this PR." - see
> [linkerd2/CONTRIBUTING.md](https://github.com/linkerd/linkerd2/blob/main/CONTRIBUTING.md#option-2-public-statement)

### Editor ondersteuning

Als je VS Code gebruikt en standaard de sign off wilt laten doen, kun je daarvoor de
`git.alwaysSignOff` setting op `true` zetten. (zie
[voorbeeld](https://github.com/ospo-nl/kennisbank/blob/main/.vscode/settings.json) in het OSPO-NL
project)