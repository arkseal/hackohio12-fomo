import { getUrl, uploadData, list, ListPaginateWithPathInput } from 'aws-amplify/storage';

export function getEventPhoto(imageurl: string) {
    let r = '-1';
    const getLink = async () => {
        try {
            const link = await getUrl({
                path: `EventImage/${imageurl}`,
                options: {
                // Specify a target bucket using name assigned in Amplify Backend
                    bucket: "fomoPhotos"
                }
            }).then((l) => r = l.url.toString());
            //console.log(link);
            //const imageLink = link.url.toString();
        } catch (error) {
            console.error(error);
            r = '';
        }
    }
    getLink();
    return r;
}

export function uploadEventPhoto(file: any, eventid: string) {
    try {
        const result =  uploadData({
            path: `EventImage/${eventid}`,
            data: file,
            options: {
                bucket: "fomoPhotos"
            }
        });
        while (result.state == "IN_PROGRESS") {
            process.stdout.write('.');
        }
        console.log(result);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
