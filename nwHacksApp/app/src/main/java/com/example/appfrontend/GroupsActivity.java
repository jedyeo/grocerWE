package com.example.appfrontend;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;

import java.util.ArrayList;

public class GroupsActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_groups);

        ListView itemListView = findViewById(R.id.itemlistview);
        Button addItemButton = findViewById(R.id.button6);
        EditText textBox = findViewById(R.id.editTextTextPersonName2);

        ArrayList<String> itemList = new ArrayList<>();
        itemList.add("Wentworth Block");
        itemList.add("Household");

        ArrayAdapter<String> adapter = new ArrayAdapter<>(getApplicationContext(), android.R.layout.simple_list_item_1, itemList);
        itemListView.setAdapter(adapter);

        // Listener to add items
        addItemButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String item = textBox.getText().toString();

                if (!item.equals("")) {
                    itemList.add(textBox.getText().toString());
                    textBox.setText("");
                    adapter.notifyDataSetChanged();
                }
            }
        });

        // Listener to remove items
        itemListView.setOnItemLongClickListener(new AdapterView.OnItemLongClickListener() {
            @Override
            public boolean onItemLongClick(AdapterView<?> parent, View view, int position, long id) {
                itemList.remove(position);
                adapter.notifyDataSetChanged();
                return true;
            }
        });
    }
}