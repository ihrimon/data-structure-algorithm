#include <bits/stdc++.h>
using namespace std;

/*
 * Task: Insertion sort in array (ascending order).
 */

/* Function for Insertion Sort Logic */
 void insertionSort(int array[], int size)
 {
     for(int i = 1; i < size; i++) 
     {
         int key = array[i];  // Present Item
         int j = i - 1;
 
         // Shift larger values to right
         while(j >= 0 && array[j] > key) {
             array[j + 1] = array[j];
             j--;
         }
 
         array[j + 1] = key;
     }
 }

/* Print all elements of the array */
void printArray(int array[], int size)
{
    for(int i = 0; i<size; i++)
    {
        cout<<array[i]<< " ";
    }
    cout<<endl;
}

int main()
{
    int array[10], size;

    cout << "Enter the number of elements (max 10): ";
    cin>>size;

    // Input: Insert array elements from user
    cout << "Insert " << size << " array elements: ";
    for(int i = 0; i<size; i++)
    {
        cin>>array[i];
    }

     // Sort the array using Insertion Sort
    insertionSort(array, size);

    // Output: Sorted array
    cout<<"After sorting array: ";
    printArray(array, size);

    return 0;
}
