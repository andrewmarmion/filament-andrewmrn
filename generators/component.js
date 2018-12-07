exports.gen = function (Filament, flags, arg) {
  if (Filament.checkIfExists('app/components/' + arg)) {
    Filament.exit('Component ' + arg + ' already exists.');
  }

  Filament.createDir('app/components/' + arg);
  Filament.createFile('app/components/' + arg + '/index.js', 'screenAndComponent/index.noRedux.js', {
    name: arg,
    path: 'components'
  });
  Filament.createFile('app/components/' + arg + '/styles.js', 'screenAndComponent/styles.js', {
    name: arg,
    path: 'components'
  });

  Filament.regexWrite(
    'storybook/stories/index.js',
    /(\n\/\/ Stories go here\n)/gim ,
    'import ' + arg + ' from \'app/components/' + arg + '\';\n$1\nstoriesOf(\''+ arg + '\', module)\n  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)\n  .add(\'Initial\', () => (\n    <' + arg + ' />\n  ));\n'
    );
};