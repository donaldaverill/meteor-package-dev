if (Package.templating) {
  Package.templating.Template.registerHelper('debug',
    function (optionalValue) {
      console.log('Current Context');
      console.log('====================');
      console.log(this);
      if (arguments.length > 1) {
        console.log('Value');
        console.log('====================');
        console.log(optionalValue);
      }
    }
  );
}
