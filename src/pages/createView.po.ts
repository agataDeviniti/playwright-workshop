const createView = {
    button: {
        back: 'button[data-testid*="-new-Back"]',
        create: 'button[data-testid*="-new-Create-button"]',
    },
    field:{
        summary: '[data-testid="field-summary"] input',
        component:{
            input: '[data-testid="field-components"] input[type="text"]',
            option:' [class$="-menu"] div[id*="-option-"]',
        }
    },
};

export default createView;
