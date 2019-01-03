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

	void insert(Node* lista, int item, int position = 0)
	{
		Node* temp = lista;

		while (temp->next != NULL)
			temp = temp->next;

		temp->next = new Node(item);

	}

	void print(Node* lista)
	{
		Node* temp = this;

		while (temp != NULL)
		{
			cout << (temp->data) << endl;
			temp = temp->next;
		}
	}

};



