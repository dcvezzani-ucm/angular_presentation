'use strict';

describe('service', function() {

  // load modules
  beforeEach(module('todoApp'));

  // Test service availability
  it('check the existence of Notes factory', inject(function(Notes) {
    expect(Notes).toBeDefined();
  }));

  it('#updateNotes', inject(function(Notes) {
    Notes.updateNotes("blah");
    expect(Notes.notes).toBe("blah");
  }));

  it('#getNotes', inject(function(Notes) {
    Notes.notes = "bleh";
    expect(Notes.getNotes()).toBe("bleh");
  }));

  it('#removeNotes', inject(function(Notes) {
    Notes.notes = "bluh";
    Notes.removeNotes();
    expect(Notes.notes).toBe("");
  }));

});
