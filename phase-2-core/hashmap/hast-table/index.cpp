/**
 * A Hash Table (also known as a Hash Map) is a data structure that stores data in key-value pairs.
It allows you to insert, search, and delete data very quickly — usually in O(1) average time.



🧩 Applications of Hash Table

✅ Database indexing
✅ Caching (e.g., browser cache, memory cache)
✅ Compiler symbol tables
✅ Password storage (with hashing)
✅ Implementing maps and sets
 */

 #include <iostream>
#include <unordered_map>
using namespace std;

int main() {
    // Creating a hash table using unordered_map
    unordered_map<int, string> students;

    // Insert key-value pairs
    students[11] = "Rimon";
    students[22] = "Arafat";
    students[31] = "Nafis";

    // Access elements
    cout << "Student with roll 22: " << students[22] << endl;

    // Delete an element
    students.erase(31);

    // Print all key-value pairs
    cout << "\nAll students:\n";
    for (auto &student : students) {
        cout << "Roll: " << student.first << " -> Name: " << student.second << endl;
    }

    return 0;
}
