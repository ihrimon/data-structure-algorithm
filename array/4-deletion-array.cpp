#include <bits/stdc++.h>
using namespace std;

/*
 * Task: Delete an element from the array at a specified index.
 */

/* Function to print the array */
void printArray(int array[], int size)
{
    cout<<"Given array: ";

    for(int i = 0; i<size; i++)
    {
        cout<<array[i]<< " ";
    }
    cout<<endl;
}

int main()
{
    int array[10];
    int size;

    cout << "Enter the number of elements (max 10): ";
    cin>>size;

    // Input: Insert array elements from user
    cout << "Insert " << size << " array elements: ";
    for(int i = 0; i<size; i++)
    {
        cin>>array[i];
    }

    int index;
    cout << "Enter the index which one want to delete (0 to " << size - 1 << "): ";
    cin >> index;
    
    // Check index validity
    if (index < 0 || index >= size)
    {
        cout << "Invalid index. It must be between 0 and " << size - 1 << "." << endl;
        return 0;
    }

    // Deletion logic: shift elements left
    for (int i = index; i < size - 1; i++)
    {
        array[i] = array[i + 1];
    }
    size--;

    // Output: print the array after deletion
    cout << "Array after deletion: ";
    printArray(array, size);

    return 0;
}
