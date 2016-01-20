package com.bankSystem.json;

import org.json.JSONObject;

import java.util.Map;

/**
 * Created by pahan on 08.12.15.
 */
public class JSONService {


    public static String mapToJSON(Map<String, String> mapPar){

        JSONObject jsonObject = new JSONObject();

        for (Map.Entry<String, String> entry: mapPar.entrySet()) {
            jsonObject.put(entry.getKey(), entry.getValue());
        }
        //mapPar.keySet()

        return jsonObject.toString();
    }


}
