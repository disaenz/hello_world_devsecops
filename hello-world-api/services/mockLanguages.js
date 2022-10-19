function languages() {
    console.log("testing from moc")
    return { languages: [
        {name: "English", content:"Hello World"},
        {name: "German", content:"Hallo Welt"},
        {name: "French", content:"Bonjour le monde"},
        {name: "Spanish", content:"Hola Mundo"},
        {name: "Latin", content:"Salve Mundi"},
        {name: "Mandarin", content:"你好世界"},
        {name: "Arabic", content:"مرحبا بالعالم"},
        {name: "Hindi", content: "नमस्ते दुनिया"}
    ]};
}
module.exports.languages = languages;