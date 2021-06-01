const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1.0')

//create add command
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
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
   
//create remove a command
yargs.command({
    command:'remove',
    describe:'remove the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//create list command
yargs.command({
    command:'list',
    describe:'list all notes',
    handler(){
        notes.listNotes()
    }
})
//create read command
yargs.command({
    command:'read',
    describe:'read note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()


//console.log(chalk.green('success'))

// const validator = require('validator')
// const getNotes = require('./notes')
// const msg = getNotes()
// console.log(msg)

// console.log(validator.isURL('harshicom/hello.com'))

// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'This file was created using node.js! ')
// fs.appendFileSync('notes.txt','My name is Harshita.')