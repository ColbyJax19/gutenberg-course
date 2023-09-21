// This course outlines how to create custom Gutenberg blocks.
// We do not write any compilers
// for converting ES6 until later in the course.
// This explains the initial use of ES5.

var registerBlockType = wp.blocks.registerBlockType;

registerBlockType('blocks/firstblock', {
  edit: function () {
    return 'Edit';
  },
  save: function () {
    return 'Save';
  },
});
