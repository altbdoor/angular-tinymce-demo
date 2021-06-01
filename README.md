# angular-tinymce-demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## What was done to use self-hosted TinyMCE 5

Please refer to the [official documentation](https://www.tiny.cloud/docs/integrations/angular/)!

- Added `@tinymce/tinymce-angular` and `tinymce` as dependencies in `package.json`
    - `@tinymce/tinymce-angular` for the Angular related stuff
    - `tinymce` to self host the TinyMCE library
- Updated `angular.json` to treat `node_modules/tinymce` as asset (basically copy-pasting it over during build)
    - I used `assets/tinymce`, but anything else should be fine
    - Offical docs recommends `/tinymce`
- Import `EditorModule`, and manually provide `TINYMCE_SCRIPT_SRC`, based on the path configured in `angular.json`
    - If left blank, TinyMCE will load the cloud version
- Use `<editor>` in the template

## Questions?

1. **Are you a lawyer?**

    No. Don't really like legalese either. All I did was read the [tl;dr version](https://tldrlegal.com/license/gnu-lesser-general-public-license-v2.1-(lgpl-2.1)), and the [TinyMCE blog post](https://www.tiny.cloud/blog/tinymce-free-wysiwyg-html-editor/).

1. **Why don't we just import the TinyMCE library into the project?**

    > If the software is statically linked (i.e. compiled into) your work, you must release object code or source code such that the user can modify the library. If otherwise (dynamically linked), you must make the source for the library available.

    So it really depends on the nature of the project. I'm considering TinyMCE for a closed-source, commercial project, so "dynamic link" is the way to go.

1. **Can I cache-bust/version the TinyMCE library?**

    Probably... But according to GNU LGPL v2.1, "must either include the original source code or link clearly to a way to obtain it".

    Cache busting certainly does not modify the file, but I am not sure. We can also cache bust it via the folder name in `angular.json`, but that's manual work.

1. **Can I trim out unneeded TinyMCE files in `angular.json`?**

    Not recommended. Again, "must either include the original source code or link clearly to a way to obtain it".

    Removing the files _might_ fall under "changes made to software", which requires us to state the changes somewhere.

    And also, the original license from TinyMCE needs to be preserved.

1. **File size concerns?**

    The whole TinyMCE folder copied over will be around 7.7MB in size. Although not everything inside is used.
