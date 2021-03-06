'use strict';

const { prompt } = require('./lib');

(async function(){
    const questions = [
        {
            type: 'text',
            name: 'twitter',
            message: `What's your twitter handle?`,
            initial: 'terkelg',
            format: v => `@${v}`
        },
        {
            type: 'password',
            name: 'secret',
            message: 'Tell me a secret'
        },
        {
            type: 'invisible',
            name: 'password',
            message: `Enter password`
        },
        {
            type: 'number',
            name: 'age',
            message: 'How old are you?'
        },
        {
            type: 'confirm',
            name: 'confirmed',
            message: 'Can you confirm?' 
        },
        {
            type: prev => prev && 'toggle',
            name: 'confirmtoggle',
            message: 'Can you confirm again?',
            active: 'yes',
            inactive: 'no'
        },
        {
            type: 'list',
            name: 'keywords',
            message: 'Enter keywords' 
        },
        {
            type: 'select',
            name: 'color',
            message: 'Pick a color',
            choices: [
              { title: 'Red', value: '#ff0000' }, 
              { title: 'Green', value: '#00ff00' },
              { title: 'Blue', value: '#0000ff' }
            ]
        },
        {
            type: 'multiselect',
            name: 'multicolor',
            message: 'Pick colors',
            choices: [
                { title: 'Red', value: '#ff0000' },
                { title: 'Green', value: '#00ff00' },
                { title: 'Blue', value: '#0000ff' }
            ]
        },
        {
            type: 'autocomplete',
            name: 'value',
            message: 'Pick your favorite actor',
            initial: 1,
            choices: [
                { title: 'Cage' },
                { title: 'Clooney', value: 'silver-fox' },
                { title: 'Gyllenhaal' },
                { title: 'Gibson' },
                { title: 'Grant' },
            ]
        }
    ];

    const answers = await prompt(questions);
    console.log(answers);

})();
