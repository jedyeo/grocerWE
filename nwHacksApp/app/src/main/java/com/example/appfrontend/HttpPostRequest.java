package com.example.appfrontend;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.net.URL;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;


public class HttpPostRequest {

    private static final String URL = "http://ec2-52-52-24-17.us-west-1.compute.amazonaws.com:9091";

    // @param jsonData is a get formatted string
    public void sendGetRequest() throws Exception {
        URL url = new URL(URL + "/list");
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();

        connection.setRequestMethod("GET");

        int rc = connection.getResponseCode();

        System.out.println("Made GET request, received code " + rc);

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        StringBuilder sb = new StringBuilder();

        String str;
        while ((str = bufferedReader.readLine()) != null) {
            sb.append(str);
        }
        bufferedReader.close();

        System.out.println(sb.toString());
    }

    // @param jsonData is a json formatted string
    public void sendPostRequest(String jsonData) throws Exception {

        URL url = new URL(URL);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();

        connection.setRequestMethod("POST");
        connection.setDoOutput(true);
        connection.setRequestProperty("Accept-Language", "en-US,en;q=0.5");
        connection.setRequestProperty("Content-Type","application/json");

        DataOutputStream wr = new DataOutputStream(connection.getOutputStream());
        wr.writeBytes(jsonData);
        wr.flush();
        wr.close();

        int rc = connection.getResponseCode();
        System.out.println("\n Sent this data:\n" + jsonData + "\n Received code " + rc);

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        StringBuilder sb = new StringBuilder();

        String str;
        while ((str = bufferedReader.readLine()) != null) {
            sb.append(str);
        }
        bufferedReader.close();

        System.out.println(sb.toString());
    }
    public static void main(String[] args) throws Exception {
        HttpPostRequest http = new HttpPostRequest();

        http.sendGetRequest();
        http.sendPostRequest("{ \"key\":\"value\" } ");
    }
}
