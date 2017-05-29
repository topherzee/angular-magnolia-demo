<!DOCTYPE html>
<html xml:lang="${cmsfn.language()}" lang="${cmsfn.language()}">
  <head>
    [@cms.page /]
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${content.windowTitle!content.title!}</title>
    <meta name="description" content="${content.description!""}" />
    <meta name="keywords" content="${content.keywords!""}" />

    [#-- To load resources you can link them manually (e.g. line below) --]
      [#-- <link rel="stylesheet" type="text/css" href="${ctx.contextPath}/.resources/angular-magnolia-demo/webresources/css/bootstrap.css" media="all" /> --]
      [#-- <script src="${ctx.contextPath}/.resources/angular-magnolia-demo/webresources/js/jquery.js"></script> --]
    [#-- or via theme --]
      [#-- [#assign site = sitefn.site()!] --]
      [#-- [#assign theme = sitefn.theme(site)!] --]
      [#-- [#list theme.cssFiles as cssFile] --]
      [#--   [#if cssFile.conditionalComment?has_content]<!--[if ${cssFile.conditionalComment}]>[/#if] --]
      [#--     <link rel="stylesheet" type="text/css" href="${cssFile.link}" media="${cssFile.media}" /> --]
      [#--   [#if cssFile.conditionalComment?has_content]<![endif]-->[/#if] --]
      [#-- [/#list] --]
      [#-- [#list theme.jsFiles as jsFile] --]
      [#--   <script src="${jsFile.link}"></script> --]
      [#-- [/#list] --]
    [#-- uncomment next line to use resfn templating functions to load all css which matches a globbing pattern --]
      [#-- ${resfn.css(["/angular-magnolia-demo/.*css"])!} --]
  </head>
  <body class="ng-demo ${cmsfn.language()}">

    <div class="container ">
      <h1>ng-demo works!</h1>
    </div>

    [@cms.area name="main"/]

    [#-- use resfn to load all js which matches the globbing pattern or link resources manually or via theme --]
    ${resfn.js(["/angular-magnolia-demo/webresources/dist/inline.bundle.js"])!}
    ${resfn.js(["/angular-magnolia-demo/webresources/dist/polyfills.bundle.js"])!}

    ${resfn.js(["/angular-magnolia-demo/webresources/dist/styles.bundle.js"])!}

    ${resfn.js(["/angular-magnolia-demo/webresources/dist/vendor.bundle.js"])!}
    ${resfn.js(["/angular-magnolia-demo/webresources/dist/main.bundle.js"])!}
  

  </body>
</html>
