export default {
    base_url: 'http://localhost:8080',
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
            id: 'south-33',
            label: '33 South',
            endpoint: '/south-33'
        }
    ],
    getEndpoint(path) {
        return this.base_url + path;
    }
}