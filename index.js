const keyboard = {
    Backquote: {
        EN: '`~',
        RU: 'ёЁ',
    },
    Digit1: {
        EN: '1!',
        RU: '1!',
    },
    Digit2: {
        EN: '2@',
        RU: '2"',
    },
    Digit3: {
        EN: '3#',
        RU: '3№',
    },
    Digit4: {
        EN: '4$',
        RU: '4;',
    },
    Digit5: {
        EN: '5%',
        RU: '5%',
    },
    Digit6: {
        EN: '6^',
        RU: '6:',
    },
    Digit7: {
        EN: '7&',
        RU: '7?',
    },
    Digit8: {
        EN: '8*',
        RU: '8*',
    },
    Digit9: {
        EN: '9(',
        RU: '9(',
    },
    Digit0: {
        EN: '0)',
        RU: '0)',
    },
    Minus: {
        EN: '-_',
        RU: '-_',
    },
    Equal: {
        EN: '=+',
        RU: '=+',
    },
    Backspace: {
      name: '&larr;',
      activity: (value, curretPos) => value.slice(0, curretPos - 1) + value.slice(curretPos),
    },
    Tab: {
      name: 'Tab',
      activity: (value, curretPos) => `${value.slice(0, curretPos)}\t${value.slice(curretPos)}`,
    },
    KeyQ: {
        EN: 'qQ',
        RU: 'йЙ',
    },
    KeyW: {
        EN: 'wW',
        RU: 'цЦ',
    },
    KeyE: {
        EN: 'eE',
        RU: 'уУ',
    },
    KeyR: {
        EN: 'rR',
        RU: 'кК',
    },
    KeyT: {
        EN: 'tT',
        RU: 'еЕ',
    },
    KeyY: {
        EN: 'yY',
        RU: 'нН',
    },
    KeyU: {
        EN: 'uU',
        RU: 'гГ',
    },
    KeyI: {
        EN: 'iI',
        RU: 'шШ',
    },
    KeyO: {
        EN: 'oO',
        RU: 'щЩ',
    },
    KeyP: {
        EN: 'pP',
        RU: 'зЗ',
    },
    BracketLeft: {
        EN: '[{',
        RU: 'хХ',
    },
    BracketRight: {
        EN: ']}',
        RU: 'ъЪ',
    },
    Delete: {
      name: 'DEL',
      activity: (value, cur) => (cur ? value.slice(0, cur) + value.slice(cur + 1) : value),
    },
    CapsLock: {
      name: 'CapsLock',
    },
    KeyA: {
        EN: 'aA',
        RU: 'фФ',
    },
    KeyS: {
        EN: 'sS',
        RU: 'ыЫ',
    },
    KeyD: {
        EN: 'dD',
        RU: 'вВ',
    },
    KeyF: {
        EN: 'fF',
        RU: 'аА',
    },
    KeyG: {
        EN: 'gG',
        RU: 'пП',
    },
    KeyH: {
        EN: 'hH',
        RU: 'рР',
    },
    KeyJ: {
        EN: 'jJ',
        RU: 'оО',
    },
    KeyK: {
        EN: 'kK',
        RU: 'лЛ',
    },
    KeyL: {
        EN: 'lL',
        RU: 'дД',
    },
    Semicolon: {
        EN: ';:',
        RU: 'жЖ',
    },
    Quote: {
        EN: '\'"',
        RU: 'эЭ',
    },
    Enter: {
      name: '&crarr;',
    },
    ShiftLeft: {
      name: '&uarr;',
    },
    IntlBackslash: {
        EN: '\\|',
        RU: '\\/',
    },
    KeyZ: {
        EN: 'zZ',
        RU: 'яЯ',
    },
    KeyX: {
        EN: 'xX',
        RU: 'чЧ',
    },
    KeyC: {
        EN: 'cC',
        RU: 'сС',
    },
    KeyV: {
        EN: 'vV',
        RU: 'мМ',
    },
    KeyB: {
        EN: 'bB',
        RU: 'иИ',
    },
    KeyN: {
        EN: 'nN',
        RU: 'тТ',
    },
    KeyM: {
        EN: 'mM',
        RU: 'ьЬ',
    },
    Comma: {
        EN: ',<',
        RU: 'бБ',
    },
    Period: {
        EN: '.>',
        RU: 'юЮ',
    },
    Slash: {
        EN: '/?',
        RU: '.,',
    },
    ShiftRight: {
      name: '&uarr;',
    },
    ArrowUp: {
      name: '&and;',
    },
    ControlLeft: {
      name: 'Ctrl',
    },
    AltLeft: {
      name: 'Alt',
    },
    Space: {
      name: 'Space',
    },
    AltRight: {
      name: 'Alt',
    },
    ControlRight: {
      name: 'Ctrl',
    },
    ArrowLeft: {
      name: '<',
    },
    ArrowDown: {
      name: '&or;',
    },
    ArrowRight: {
      name: '>',
    },
  };
  

let localLang = localStorage.getItem('vk-lang');
let lang = localLang || 'EN';

var link = document.createElement('link'); 
    link.rel = 'stylesheet'; 
    link.type = 'text/css';
    link.href = 'index.css'; 
    document.getElementsByTagName('HEAD')[0].appendChild(link); 
    
    let divKeyboard = document.createElement('div');
    divKeyboard.classList.add('keyboard');
    document.body.append(divKeyboard);

    let textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    divKeyboard.append(textarea);

    let wrapper = document.createElement('div');
    wrapper.classList.add('keys-wrapper');
    divKeyboard.append(wrapper);
    const entries = Object.entries(keyboard);

    entries.forEach(([key, value]) => {
        let div = document.createElement('div');
            
        if (value[lang]) {
            div.classList.add('letter');
            let letter =  value[lang][0];
            div.innerHTML = letter;
            div.dataset.value = letter;


        } else {
            div.innerHTML = value.name;

            switch (key) {
                case 'ArrowLeft':
                case 'ArrowDown':
                case 'ArrowRight':
                case 'Tab':
                    div.classList.add('special-key-mini');
                    break;
                default:
                    div.classList.add('special-key');
              }
        }
        div.dataset.code = key;

        
        
        wrapper.append(div);
    })

    wrapper.addEventListener('click', (event)=> {
        const value = event.target.getAttribute("data-value");
        if (value) {
            textarea.innerHTML += value;
        }
    })


    // document.addEventListener('keyup', makeActiveElem)
    // document.addEventListener('keydown', makeActiveElem)
    const activeKeys = [];
    document.addEventListener('keyup', (event)=> {
        const findLetter = wrapper.querySelector(`[data-code="${event.code}"]`);
        if (findLetter) {
            findLetter.classList.remove('active');
        }

        if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
            console.log('Отменить!')
          }
    console.log('keyup')
    console.log(event)

    })
    document.addEventListener('keydown', makeActiveElem)

    function makeActiveElem(event){
        const findLetter = wrapper.querySelector(`[data-code="${event.code}"]`);
        if (findLetter) {
            findLetter.classList.add('active');
        }

        if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
            console.log('Отменить!')
          }
          console.log('keydown')

    }

    





