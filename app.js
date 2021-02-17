const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Version of app
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {notes.addNote(argv.title, argv.body);}
    

});

yargs.command({
    command: 'remove',
    describe: 'Removing the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
            notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'Listing the existing notes',
    handler() {
            notes.listNotes();
    } 
});

yargs.command({
    command: 'read',
    describe: 'This is for reading specific note from List of name of notes',
    builder: {
        title: {
            describe: 'Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.parse();






// console.log(yargs.argv);

// const command = process.argv[2];

// console.log(yargs.argv);

// if (command === 'add') {
//     console.log(chalk.green('Adding note'));
// } 
// else if (command === 'remove') {
//     console.log(chalk.green('Removing note'));
// };

// console.log(chalk.green.inverse('Success'));
// // console.log(chalk.red('This is update'));

// console.log(process.argv[2]);