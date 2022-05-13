import AsyncStorage from '@react-native-async-storage/async-storage';

// Buscar links salvos
export async function getLinksSave(key){
    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}

// Salvar link no storage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    // Se tiver algum link salvo com esse mesmo ID, preciso ignorar
    const hasLink = linksStored.some(link => link.id === newLink.id);

    if(hasLink){
        console.log('Esse link já existe na lista')
        return;
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored))
    console.log('link salvo com sucesso')
}

// Deletar link específico do storage
export async function deleteLink(links, id){
    let myLinks = links.filter( (item) => {
        return (item.id !== id )
    })
    await AsyncStorage.setItem('netolinks', JSON.stringify(myLinks));
    console.log('link deletado do storage');
    return myLinks;
}
