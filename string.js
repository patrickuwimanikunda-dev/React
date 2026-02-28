const capitalise = (str)=>{
    return str[0].toUpperCase()+str.slice(1);
};

const revers = (str)=>{
    return str.split('').reverse('').join('');
};

const countLetters = (str)=>{
    return str.length;
};

export {capitalise, revers, countLetters}