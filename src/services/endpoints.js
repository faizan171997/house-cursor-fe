export default {
    base_url: 'https://1fec-2601-646-8200-2960-291f-2195-8317-5c03.ngrok.io',
    communities: [
        {
            id: 'avalon-morrison-park',
            label: 'Avalon Morrison Park',
            endpoint: '/avalon-morrison-park'
        },
        {
            id: 'avalon-alameda',
            label: 'Avalon Alameda',
            endpoint: '/avalon-alameda'
        },
        {
            id: 'avalon-cahill-park',
            label: 'Avalon Cahill Park',
            endpoint: '/avalon-cahill-park'
        },
        {
            id: 'san-fernando-101',
            label: '101 San Fernando',
            endpoint: '/san-fernando-101'
        },
        {
            id: 'residences-360',
            label: '360 Residences',
            endpoint: '/residences-360'
        },
        {
            id: 'south-33',
            label: '33 South',
            endpoint: '/south-33'
        },
        {
            id: 'centerra',
            label: 'Centerra',
            endpoint: '/centerra'
        }
    ],
    getEndpoint(path) {
        return this.base_url + path;
    }
}