import axios from "axios";

import endpoints from "./endpoints";

export default {
    async getApartment(apartmentEndpoint) {
        try {
            const res = await axios.get(endpoints.getEndpoint(apartmentEndpoint));
            return res?.data;
        } catch(err) {
            console.error(err);
            return null;
        }
    }
}


// endpoints.APARTMENTS.AVALON.MORRISON_PARK