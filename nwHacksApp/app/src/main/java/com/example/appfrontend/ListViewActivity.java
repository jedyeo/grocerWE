package com.example.appfrontend;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;

import java.util.ArrayList;

public class ListViewActivity extends AppCompatActivity {

    private ArrayList<String> itemList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_list_view);

        // Find view by ID
        ListView itemListView = findViewById(R.id.itemlistview);
        Button addItemButton = findViewById(R.id.additembutton);
        EditText textBox = findViewById(R.id.inputtext);

        // Instantiate new array list
        itemList = new ArrayList<>();
        
        // Instantiate and create adapter
        ArrayAdapter<String> adapter = new ArrayAdapter<>(getApplicationContext(), android.R.layout.simple_list_item_1, itemList);
        itemListView.setAdapter(adapter);

        // Listener to add items
        addItemButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                itemList.add(textBox.getText().toString());
                adapter.notifyDataSetChanged();
            }
        });
    }
}