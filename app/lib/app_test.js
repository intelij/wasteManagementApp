var should = require('should');

module.exports = function(win, view) {

    describe('app.js', function() {
        console.log('In describe app.js');
        describe('#myWindow', function() {

            it('exists', function() {
                should.exist(win);
                win.id.should.equal('myWindow');
            });

            it('has Ti.UI.Window functions', function() {
                should(win.open).be.a.Function;
                should(win.close).be.a.Function;

                if (Ti.Platform.name === 'iPhone OS') {
                    should(win.hideTabBar).be.a.Function;
                }
            });

            it('has dimensions equal to the device', function() {
                win.size.height.should.equal(Ti.Platform.displayCaps.platformHeight);
                win.size.width.should.equal(Ti.Platform.displayCaps.platformWidth);
            });

        });

        describe('#myView', function() {

            it('exists', function(){
                should.exist(view);
                view.id.should.equal('myView');
            });

            it('has Ti.UI.View functions', function() {
                should(view.add).be.a.Function;
            });

            it('is a child of window', function() {
                win.children.length.should.equal(1);
                should.exist(win.children[0]);
                win.children[0].id.should.equal('myView');
            });

            it('view has same dimensions as window', function(){
                view.size.height.should.equal(win.size.height);
                view.size.width.should.equal(win.size.width);
            });

        });

    });
    console.log('Temp directory = ' + Ti.Filesystem.tempDirectory);
    var outputFile = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, 'results.json');
    outputFile.createFile();

    mocha.setup({ 
      reporter: 'ti-spec-studio',    // the reporter to use with your tests
      outputFile: outputFile, // write results to the given Ti.Filesystem.File file
    //  quiet: true             // if true, suppress all console logging
    });
    // run the tests
    mocha.run();
};
