#include <iostream>
using namespace std;

// Node class for singly linked list
class Node {
public:
    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = nullptr;
    }
};

// LinkedList class
class LinkedList {
private:
    Node* head;

public:
    LinkedList() {
        head = nullptr;
    }

    // Insert new node at the end
    void insert(int value) {
        Node* newNode = new Node(value);
        if (head == nullptr) {
            head = newNode;
        } else {
            Node* temp = head;
            while (temp->next != nullptr) {
                temp = temp->next;
            }
            temp->next = newNode;
        }
    }

    // Search for a value in the list
    bool search(int key) {
        Node* temp = head;
        while (temp != nullptr) {
            if (temp->data == key) {
                return true;  // found
            }
            temp = temp->next;
        }
        return false; // not found
    }

    // Display all elements
    void display() {
        Node* temp = head;
        while (temp != nullptr) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL" << endl;
    }
};

// Main function
int main() {
    LinkedList list;

    list.insert(10);
    list.insert(20);
    list.insert(30);
    list.insert(40);

    cout << "Linked List: ";
    list.display();

    int key;
    cout << "Enter element to search: ";
    cin >> key;

    if (list.search(key)) {
        cout << key << " is found in the list." << endl;
    } else {
        cout << key << " is not found in the list." << endl;
    }

    return 0;
}
