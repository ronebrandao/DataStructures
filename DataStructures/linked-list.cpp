#include "pch.h"	
#include <iostream>

using namespace std;

struct Node {
	int data;
	Node* next;

	Node(int item) {
		data = item;
		next = NULL;
	}
};

void insert(Node* lista, int item, int position = 0)
{
	Node* temp = lista;

	while (temp->next != NULL)
		temp = temp->next;

	temp->next = new Node(item);

}

void print(Node* lista)
{
	Node* temp = lista;

	while (temp != NULL)
	{
		cout << (temp->data) << endl;
		temp = temp->next;
	}
}

void main()
{
	Node* A = new Node(0); //empty list

	insert(A, 1);
	insert(A, 2);
	insert(A, 3);
	insert(A, 4);
	insert(A, 5);

	print(A);

}

