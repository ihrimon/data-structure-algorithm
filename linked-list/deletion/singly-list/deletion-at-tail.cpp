// delete a tail node from the linked list

/**
 * Time Complexity: O(N), 
 * Space Complexity: O (1)
 */
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node *next;

    Node(int data) {
        this->data = data;
        this->next = nullptr;
    }
};

void deleteTail(Node*& head) {
  
  	// Check if the list is empty
    if (head == nullptr) {
        cout << "List is empty." << endl;
        return;
    }
  	
  	// Check if it contains only one element
    if (head->next == nullptr) {
        delete head;
        head = nullptr;
        return;
    }
  	
  	// Traverse to the tail node
    Node* temp = head;
    while (temp->next->next != nullptr) {
        temp = temp->next;
    }
  
  	// delete the tail node
    delete temp->next;
    temp->next = nullptr;
}

int main() {

    // Create a simple linked list
    Node *head = new Node(3);
    head->next = new Node(12);
    head->next->next = new Node(15);
  	head->next->next->next = new Node(18);
    cout << "Original List: ";
    Node *temp = head;
    while (temp != nullptr) {
        cout << temp->data << " -> ";
        temp = temp->next;
    }
    cout << "NULL" << endl;

    deleteTail(head); // Deleting the tail node

    cout << "List after deleting head: ";
    temp = head;
    while (temp != nullptr) {
        cout << temp->data << " -> ";
        temp = temp->next;
    }
    cout << "NULL" << endl;

    return 0;
}