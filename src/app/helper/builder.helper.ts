import { BuilderHelperModel } from '../models/builder.models';
export class BuilderHelper {
    public objectBuilder (keys: string[], values: []): object {
        let returnData = {}
        keys?.forEach((key, index: number) => {
            returnData = { key: values[index] }
        })

        return returnData;
    }
}