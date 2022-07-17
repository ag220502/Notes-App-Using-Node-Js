const chalk = require('chalk')
const yargs = require('yargs')
const { removeNote, listNotes, readNote } = require('./notes.js')
const notes = require('./notes.js')

//Cutomising the version
yargs.version('1.0.1')

//Creating add command
yargs.command({
    command:"add",
    description:"Add a New note",
    builder:{
        title:{
            description:"Note Title",
            demandOption:true,
            type:"string"
        },
        body:{
            description:"Note body",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv)
    {
        notes.addNotes(argv.title,argv.body)
    }
})
//Creating remove command
yargs.command({
    command:"remove",
    description:"Remove a note",
    builder:{
        title:{
            description:"Note Title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv)
    {
        removeNote(argv.title)
    }
})
//Creating list command
yargs.command({
    command:"list",
    description:"List all notes",
    handler()
    {
        listNotes()
    }
})
//Creating read command
yargs.command({
    command:"read",
    description:"Read a note",
    builder:{
        title:{
            description:"Note Title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv)
    {
        readNote(argv.title);
    }
})
yargs.parse()