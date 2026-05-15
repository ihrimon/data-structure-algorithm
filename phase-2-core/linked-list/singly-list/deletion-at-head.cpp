// delete a head node from the linked list

/**
 * Time Complexity: O(1)
 * Space Complexity: O(1)
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

// Function to delete the head node
void deleteHead(Node *&head) {

    // if head is null return empty
    if (head == nullptr) {
        cout << "Empty List." << endl;
        return;
    }

    // Store current head in a temporary variable
    Node *temp = head;

    // Move head to the next node
    head = head->next;

    // Delete the old head node
    delete temp;
}

int main() {

    // Create a simple linked list
    Node *head = new Node(10);
    head->next = new Node(20);
    head->next->next = new Node(30);
  	head->next->next->next = new Node(40);
  
    cout << "Original List: ";
    Node *temp = head;
    while (temp != nullptr) {
        cout << temp->data << " -> ";
        temp = temp->next;
    }
    cout << endl;

    deleteHead(head); // Deleting the head node

    cout << "List after deleting head: ";
    temp = head;
    while (temp != nullptr) {
        cout << temp->data << " -> ";
        temp = temp->next;
    }
    cout << "NULL" << endl;

    return 0;
}

