package com.example.appfrontend;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;

public class GroupsActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_groups);

        ListView itemListView = findViewById(R.id.itemlistview);
        ArrayList<String> itemList = new ArrayList<>();
        itemList.add("Wentworth Block");
        itemList.add("Household");

        ArrayAdapter<String> adapter = new ArrayAdapter<>(getApplicationContext(), android.R.layout.simple_list_item_1, itemList);
        itemListView.setAdapter(adapter);
    }
}